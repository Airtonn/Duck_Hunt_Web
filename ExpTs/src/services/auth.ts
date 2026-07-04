import prismaClient from './prismaClient.js';
import validateEnv from '../utils/validateEnv.js';
import { compare, genSalt, hash } from 'bcrypt';
import type { CreateUserDto, LoginUserDto } from '../types/user.js';

const env = validateEnv();

export async function createUser(data: CreateUserDto) {
  const salt = await genSalt(Number(env.BCRYPT_ROUNDS));
  const password = await hash(data.password, salt);

  return prismaClient.user.create({
    data: {
      ...data,
      password,
    },
  });
}

export async function checkUserPassword(data: LoginUserDto) {
  const user = await prismaClient.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    return null;
  }

  const ok = await compare(data.password, user.password);
  if (!ok) {
    return null;
  }

  return user;
}