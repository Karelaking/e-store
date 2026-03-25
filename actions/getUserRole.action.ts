"use server";


import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Role } from "@/lib/prisma/enums";

export const getUserRoleAction = async (): Promise<Role | undefined> => {
  const { userId } = await auth();
  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId || undefined },
    select: { role: true }
  });
  return user?.role;
};