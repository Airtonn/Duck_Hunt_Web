import type { Request, Response } from 'express';

const play = async (req: Request, res: Response) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  res.render('game/play');
};

export default {
  play,
};
