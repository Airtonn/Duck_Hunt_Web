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
});

const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.send('<h1>pagina do abouttt</h1>');
};

const bemvindo = (req: Request, res: Response) => {
  res.send(`Seja bem vindo ${req.params.nome}`);
};

const Gerarlorem = (req: Request, res: Response) => {
  const quantidade = parseInt(req.params.quantidade as string, 10);

  const resultado = lorem.generateParagraphs(quantidade);

  res.send(`<h1>Gerador de Lorem Ipsum</h1><pre>${resultado}</pre>`);
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
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Eduardo Nakamura', sala: 0 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];
  res.render('main/hb4', { profes });
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
};
