import type { Users } from '../generated/prisma/client.js';

export type CreateUserDto = Pick<Users, 'fullName' | 'email' | 'password' | 'majorId'>;
export type LoginUserDto = Pick<Users, 'email' | 'password'>;