import { type Request, type Response, type NextFunction } from 'express';
import fs from 'fs/promises';
import getEnv from '../utils/validateEnv.js';

type LogType = 'simple' | 'complete';
const env = getEnv();
const pathLog = `${process.cwd()}/${env.LOGGER_PATH}`;
const fileLog = `${pathLog}/logs.log`;

async function createLogPath() {
  try {
    await fs.access(pathLog);
  } catch (e) {
    await fs.mkdir(pathLog);
  }
}

function logger(type: LogType) {
  if (type === 'simple') {
    return async (req: Request, res: Response, next: NextFunction) => {
      await createLogPath();
      const log = `${new Date().toISOString()}, ${req.url}, ${req.method}\n`;
      fs.appendFile(fileLog, log);
      next();
    };
  } else {
    return async (req: Request, res: Response, next: NextFunction) => {
      await createLogPath();
      const log = `${new Date().toISOString()}, ${req.url}, ${req.method}, ${req.httpVersion}, ${req.get('User-Agent')}\n`;
      fs.appendFile(fileLog, log);
      console.log('complete');
      next();
    };
  }
}

export default logger;
