import type { Request, Response } from 'express';
import { getMajors } from '../services/major.js';
import { createUser, checkUserPassword } from '../services/auth.js';

const singup = async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    const majors = await getMajors();
    res.render('auth/signup', { majors });
  } else if (req.method === 'POST') {
    await createUser(req.body);
    res.redirect('/login');
  }
};

const login = async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    res.render('auth/login');
  } else if (req.method === 'POST') {
    const user = await checkUserPassword(req.body);

    if (user) {
      req.session.userId = user.id;
      res.redirect('/');
    } else {
      res.render('auth/login');
    }
  }
};

const logoutHandler = async (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Erro ao destruir a sessao:', err);
    }
    res.redirect('/login');
  });
};

export default { singup, login, logoutHandler };