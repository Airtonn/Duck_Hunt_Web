import type { Request, Response } from 'express';
import { getMajors } from '../services/major.js';
import { createUser, loginUser, logout } from '../services/auth.js';

const singup = async (req: Request, res: Response) => {
    if (req.method === 'GET') {
        const majors = await getMajors();
        res.render('auth/singup', { majors });
    } else if (req.method === 'POST') {
        try {
            await createUser(req.body);
            res.redirect('/login');
        } catch (err: any) {
            console.error('Erro no cadastro:', err);
            const majors = await getMajors();
            res.render('auth/singup', { 
                majors, 
                error: 'Erro ao cadastrar. Verifique se os dados estão corretos ou se o e-mail já existe.' 
            });
        }
    }
};

const login = async (req: Request, res: Response) => {
    await loginUser(req, res);
};

const logoutHandler = async (req: Request, res: Response) => {
    await logout(req, res);
};

export default { singup, login, logoutHandler };
