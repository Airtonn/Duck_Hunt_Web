import prismaClient from './prismaClient.js';
import valideteEnv from './validateEnv.js';
import {compare, genSalt, hash} from 'bcrypt';
import type { CreateUserDto, LoginUserDto } from '../types/user.js';
import {Request, Response} from 'express';
import { Session } from 'express-session';

const env = valideteEnv();

export async function createUser(data: CreateUserDto) {
    const salt = await genSalt(env.BCRYPT_ROUNDS);
    const password = await hash(data.password, salt);
}


export async function loginUser(req: Request, res: Response){
    if (req.method === 'GET') {
        res.render('auth/login');
    } else if (req.method === 'POST') {
        const data = req.body as LoginUserDto;
        const user = await checkUserPassword(data);
        if (!user) {
          req.session.uid = user.id;

        }
        else {
            res.render('auth/login');
        }
}

export async function checkUserPassword(data: LoginUserDto): Promise<> {
    const user = await prisma.user.findFirst({
    where: {
            email: data.email,
        },
    });
    if (!user) {
        return null;
    }
    const ok = await compare(data.password, user ? user.password : 'FAKEHASH');
    if (!ok) {
        return null;
    }
    return user;
}


export async function logout(req: Request, res: Response) {
    await req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao destruir a sessão:', err);
        }
        res.redirect('/login');
    });
};