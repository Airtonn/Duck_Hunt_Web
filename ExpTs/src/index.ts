import express from 'express';
import getEnv from './utils/validateEnv.js';
import logger from './middlewares/logger.js';
import router from './router/router.js';
import { engine } from 'express-handlebars';
import helpers from './views/helpers/helpers.js';
import session from 'express-session'; 
//import morgan from "morgan"


declare module 'express-session' {}


const env = getEnv();
const PORT = env.PORT;
const app = express();

//app.use(morgan("short"))

app.engine(
  'handlebars',
  engine({
    helpers: helpers,
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${process.cwd()}/src/views`);

app.use(logger('simple'));

//http://localhost:5555/css/style.css
app.use('/css', [
  express.static(`${process.cwd()}/public/css`),
  express.static(`${process.cwd()}/node_modules/bootstrap/dist/css`),
]);
app.use('/img', express.static(`${process.cwd()}/public/img`));
app.use('/js', [
  express.static(`${process.cwd()}/public/js`),
  express.static(`${process.cwd()}/node_modules/bootstrap/dist/js`),
]);
app.use('/bootstrap-icons', express.static(`${process.cwd()}/node_modules/bootstrap-icons/font`));

// isso é para o express ler o body da requisição e transformar em um objeto JavaScript
app.use(express.urlencoded({ extended: false }))
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});


app.use(session({
  genid: () => uuidv4(), // usamos UUID para gerar os SESSID
  secret: 'Hi9Cf#mK98',
  resave: true,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  res.locals.logged = !!req.session.userId; // Verifica se o usuário está logado
  next();
});
