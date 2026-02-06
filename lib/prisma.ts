// lib/prisma.ts
import 'dotenv/config';
import { PrismaClient } from '@prisma/client'; // caminho oficial

const prisma = new PrismaClient();

export { prisma };
