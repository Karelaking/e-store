"use server";

import { Role } from "@/lib/prisma/enums";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const setUserRoleAction = async (role: Role) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!Object.values(Role).includes(role)) {
    throw new Error("Invalid role");
  }

  if (role === Role.ADMIN) {
    throw new Error("Cannot assign admin role");
  }

  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });

  try {
    if (user?.role === Role.UNREGISTERED) { 
      await prisma.user.update({
        where: {
          clerkUserId: userId,
        },
        data: {
          role,
        },
      });
    }
    revalidatePath("/");
    return { success: true, redirect: "/" };
  } catch (error) {
    console.error("Error setting user role:", {
      error,
      userId,
      role,
    });
    throw new Error("Failed to set user role");
  }
};
