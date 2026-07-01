import { Request, Response } from 'express';
import { Session } from 'express-session';

const play = async (req: Request, res: Response) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('game/play');
};

export default {
  play,
};
