import type { Request, Response } from 'express';
import type { CreateMajorDto } from '../types/major.js';
import { createMajor, getMajors } from '../services/major.js';

const index = async (req: Request, res: Response) => {
  try {
    const majors = await getMajors();
    res.render('major/index', { majors });
  } catch (err) {
    res.status(500).send(err);
  }
};

const create = async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    res.render('major/create');
  } else if (req.method === 'POST') {
    try {
      await createMajor(req.body);
      res.redirect('/major');
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(id);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (req.method === 'GET') {
    res.render('major/update', { id });
  } else if (req.method === 'POST') {
    // implementacao pendente
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(id);
};

export default { index, create, read, update, remove };

