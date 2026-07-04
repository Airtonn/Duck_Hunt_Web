import { type Request, type Response } from 'express';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
}, 'html');

const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.render('main/about');
};

const bemvindo = (req: Request, res: Response) => {
  res.send(`Seja bem vindo ${req.params.nome}`);
};

const Gerarlorem = (req: Request, res: Response) => {
  const quantidade = parseInt(req.params.quantidade as string, 10);

  const resultado = lorem.generateParagraphs(quantidade);

  res.send(resultado);
};

const hb1 = (req: Request, res: Response) => {
  const mensagem = 'Bem vindo(a) ao webacademy';
  res.render('main/hb1', {
    mensagem,
  });
};

const hb2 = (req: Request, res: Response) => {
  const message = 'Bem vindo(a) ao webacademy';
  res.render('main/hb2', {
    layout: 'main2',
    showMessage: true,
    message,
  });
};

const hb3 = (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('main/hb3', { profes });
};

const hb4 = function (req: Request, res: Response) {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];
  res.render('main/hb4', { technologies });
};

import prismaClient from '../services/prismaClient.js';

const ranking = async (req: Request, res: Response) => {
  try {
    const topScores = await prismaClient.gameSessions.groupBy({
      by: ['UserId'],
      _max: {
        score: true,
      },
      orderBy: {
        _max: {
          score: 'desc',
        },
      },
      take: 10,
    });

    // Fetch user details for the top scores
    const userIds = topScores.map(score => score.UserId);
    const users = await prismaClient.users.findMany({
      where: {
        idUser: { in: userIds }
      }
    });

    const rankingData = topScores.map((score, index) => {
      const user = users.find(u => u.idUser === score.UserId);
      return {
        position: index + 1,
        name: user?.fullName || 'Unknown',
        score: score._max.score
      };
    });

    res.render('main/ranking', { ranking: rankingData });
  } catch (error) {
    console.error('Erro ao gerar ranking:', error);
    res.status(500).send('Erro interno');
  }
};

export default {
  index,
  about,
  bemvindo,
  Gerarlorem,
  hb1,
  hb2,
  hb3,
  hb4,
  ranking,
};
