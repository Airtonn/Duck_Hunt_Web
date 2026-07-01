import type { User } from '../generated/prisma/client.js';

export type CreateUserDto = Pick<User, 'name' | 'email' | 'password'>;
export type LoginUserDto = Pick<User, 'email' | 'password'>;

