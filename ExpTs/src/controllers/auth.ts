import type { Request, Response } from 'express';
import { getMajors } from '../services/major.js';
import { createUser, loginUser, logout } from '../services/auth.js';
import type { Request, Response } from "express";

const singup = async (req: Request, res: Response) => {
    if (req.method === 'GET') {
        const majors = await getMajors();
        res.render('auth/singup', { majors });
    } else if (req.method === 'POST') {
        await createUser(req.body);
        res.redirect('/login');
        const singup = async (req: Request, res: Response) => {
            if (req.method === "GET") {
                res.render("auth/signup");
            }
        };

        const login = async (req: Request, res: Response) => {
            if (req.method === "GET") {
                res.render("auth/login");
            }
        };
    };

    const login = async (req: Request, res: Response) => {
        await loginUser(req, res);
    };

    const logoutHandler = async (req: Request, res: Response) => {
        await logout(req, res);
    };

    export default { singup, login, logoutHandler };