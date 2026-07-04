import type { Request, Response, NextFunction } from 'express';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && req.session.userId) {
        next();
    } else {
        res.redirect('/login');
    }
};

export const setLocals = (req: Request, res: Response, next: NextFunction) => {
    res.locals.isAuth = !!(req.session && req.session.userId);
    next();
};
