import { cleanEnv, port, str } from 'envalid';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

function getEnv() {
  return cleanEnv(process.env, {
    PORT: port({ default: 5566 }),
    LOGGER_PATH: str({ default: 'logs' }),
    DATABASE_URL: str(),
    BCRYPT_ROUNDS: str({ default: '10' }),
  });
}

export default getEnv;
