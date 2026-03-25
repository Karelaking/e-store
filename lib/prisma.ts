import { PrismaClient } from "./prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
 


export const prisma: PrismaClient = globalThis.prisma || new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

prisma.$connect()
  .then(() => {
    console.log("Connected to the database successfully.");
  })
  .catch((error: unknown) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
  console.log(process.env.NODE_ENV);
}