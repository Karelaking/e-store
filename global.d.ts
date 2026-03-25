import { type PrismaClient } from "./lib/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}