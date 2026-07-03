import prismaClient from './prismaClient.js';
import validateEnv from '../utils/validateEnv.js';
import { compare, genSalt, hash } from 'bcrypt';
import type { CreateUserDto, LoginUserDto } from '../types/user.js';
import type { Request, Response } from 'express';

const env = validateEnv();

export async function createUser(data: CreateUserDto) {
    const salt = await genSalt(Number(env.BCRYPT_ROUNDS));
    const password = await hash(data.password, salt);
    return prismaClient.user.create({
        data: {
            ...data,
            password,
        },
    });
}

export async function loginUser(req: Request, res: Response) {
    if (req.method === 'GET') {
        res.render('auth/login');
    } else if (req.method === 'POST') {
        const data = req.body as LoginUserDto;
        const user = await checkUserPassword(data);
        if (user) {
            req.session.userId = user.id;
            res.redirect('/');
        } else {
            res.render('auth/login');
        }
    }
}

export async function checkUserPassword(data: LoginUserDto) {
    const user = await prismaClient.user.findFirst({
        where: {
            email: data.email,
        },
    });
    if (!user) {
        return null;
    }
    const ok = await compare(data.password, user.password);
    if (!ok) {
        return null;
    }
    return user;
}

export async function logout(req: Request, res: Response) {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao destruir a sessao:', err);
        }
        res.redirect('/login');
    });
}