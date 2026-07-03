import express from 'express';
import getEnv from './utils/validateEnv.js';
import logger from './middlewares/logger.js';
import router from './router/router.js';
import { engine } from 'express-handlebars';
import helpers from './views/helpers/helpers.js';
import session from 'express-session';
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid';
//import morgan from "morgan"


declare module 'express-session' {
  interface SessionData {
    userId: string;
  }
}
=======
//import morgan from "morgan"


declare module 'express-session' { }
>>>>>>> refs/remotes/origin/main


const env = getEnv();
const PORT = env.PORT;
const app = express();


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
app.use('/img', [
  express.static(`${process.cwd()}/public/img`),
  express.static(`${process.cwd()}/../game/images`),
]);
app.use('/js', [
  express.static(`${process.cwd()}/public/js`),
  express.static(`${process.cwd()}/node_modules/bootstrap/dist/js`),
]);
app.use('/bootstrap-icons', express.static(`${process.cwd()}/node_modules/bootstrap-icons/font`));



// isso é para o express ler o body da requisição e transformar em um objeto JavaScript
app.use(express.urlencoded({ extended: false }))

//passa pelo middleare de sessao
app.use(session({
  genid: () => uuidv4(),
  secret: 'Hi9Cf#mK98',
  resave: true,
  saveUninitialized: true,
}));


//isso é para adicionar a variavel sessionUserId na variavel 
app.use((req, res, next) => {
  res.locals.sessionUserId = req.session?.userId;
  next();
})


//so libera os endpoints apos adicionar uma sessao
app.use(router);


app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});


<<<<<<< HEAD
=======
app.use(session({
  secret: 'Hi9Cf#mK98',
  resave: true,
  saveUninitialized: true,
}));
>>>>>>> refs/remotes/origin/main

