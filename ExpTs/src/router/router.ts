import { Router } from 'express';
import mainController from '../controllers/main.js';
import majorController from '../controllers/major.js';
import authController from '../controllers/auth.js';

const router = Router();

router.get('/', mainController.index);

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
router.get('/major/update/:id', majorController.update);
router.get('/major/remove/:id', majorController.remove);

router.all('/signup', authController.signup);
router.all('/login', authController.login);
router.all('/logout', authController.logoutHandler);
export default router;
