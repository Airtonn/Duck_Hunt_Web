import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import validateEnv from '../utils/validateEnv.js';
import type { CreateMajorDto } from '../types/major.js';
import type { Major } from '../generated/prisma/client.js';

const env = validateEnv();

const adapter = new PrismaMariaDb(env.DATABASE_URL);
const prisma = new PrismaClient({ adapter });

export async function getMajors(): Promise<Major[]> {
  return prisma.major.findMany();
}

export async function createMajor(data: CreateMajorDto) {
  return prisma.major.create({ data });
}
