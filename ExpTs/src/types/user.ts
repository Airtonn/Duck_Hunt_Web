import type { Users } from '../generated/prisma/index.js';

export type CreateUserDto = Pick<Users, 'fullName' | 'email' | 'password' | 'majorId'>;
export type LoginUserDto = Pick<Users, 'email' | 'password'>;