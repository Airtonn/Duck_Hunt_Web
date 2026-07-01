import type { Major } from '../generated/prisma/client.js';

class CreateMajorDto implements Omit<Major, 'id' | 'createdAt' | 'updatedAt'> {
  code: string;
  name: string;
  description: string;

  constructor(code: string, name: string, description: string) {
    this.code = code;
    this.name = name;
    this.description = description;
  }
}

export { CreateMajorDto };