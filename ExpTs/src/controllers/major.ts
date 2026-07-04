import type { Request, Response } from 'express';
import type { CreateMajorDto } from '../types/major.js';
import { createMajor, getMajors, getMajor, updateMajor, deleteMajor } from '../services/major.js';

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
    } catch (err: any) {
      console.error('Erro ao criar curso:', err);
      res.render('major/create', { error: 'Erro ao criar o curso. Verifique se a sigla tem no máximo 4 caracteres e se ainda não existe.' });
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
    const major = await getMajor(id);
    res.render('major/update', { major });
  } else if (req.method === 'POST') {
    try {
      await updateMajor(id, req.body);
      res.redirect('/major');
    } catch (err: any) {
      console.error('Erro ao atualizar curso:', err);
      // Pass the old major back with the error
      const major = await getMajor(id);
      res.render('major/update', { major, error: 'Erro ao atualizar. Verifique se a sigla tem no máximo 4 caracteres e se não pertence a outro curso.' });
    }
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteMajor(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir curso' });
  }
};

export default { index, create, read, update, remove };

