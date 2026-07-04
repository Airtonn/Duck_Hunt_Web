import type { Request, Response } from 'express';
import prismaClient from '../services/prismaClient.js';

const play = async (req: Request, res: Response) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  res.render('game/play');
};

const saveScore = async (req: Request, res: Response) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  const { score } = req.body;
  if (typeof score !== 'number') {
    return res.status(400).json({ error: 'Pontuação inválida' });
  }

  try {
    await prismaClient.gameSessions.create({
      data: {
        score,
        UserId: req.session.userId,
      },
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar pontuação:', error);
    res.status(500).json({ error: 'Erro interno' });
  }
};

export default {
  play,
  saveScore,
};
