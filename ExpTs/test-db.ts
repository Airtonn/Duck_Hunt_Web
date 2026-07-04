import { PrismaClient } from './src/generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import validateEnv from './src/utils/validateEnv.js';
const env = validateEnv();
const adapter = new PrismaMariaDb(env.DATABASE_URL);
const prisma = new PrismaClient({ adapter });
prisma.major.findFirst().then(m => { console.log(m); process.exit(0); });
