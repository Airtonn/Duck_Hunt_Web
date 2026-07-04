import express, { Router } from 'express';
import mainController from '../controllers/main.js';
import majorController from '../controllers/major.js';
import authController from '../controllers/auth.js';
import gameController from '../controllers/game.js';

import { checkAuth } from '../middlewares/auth.js';

const router = Router();

router.get('/', checkAuth, mainController.index);

router.post('/score', checkAuth, express.json(), gameController.saveScore);
router.get('/ranking', checkAuth, mainController.ranking);

router.get('/about', mainController.about);

//http://localhost:5555/bemvindo/ronald
router.get('/bemvindo/:nome', mainController.bemvindo);

router.get('/lorem/:quantidade', mainController.Gerarlorem);

router.get('/hb1', mainController.hb1);

router.get('/hb2', mainController.hb2);

router.get('/hb3', mainController.hb3);

router.get('/hb4', mainController.hb4);

router.get('/major/', majorController.index);
router.all('/major/create', majorController.create);
router.get('/major/read/:id', majorController.read);
router.all('/major/update/:id', majorController.update);
router.post('/major/remove/:id', majorController.remove);

router.all('/signup', authController.signup);
router.all('/login', authController.login);
router.all('/logout', authController.logoutHandler);
export default router;
