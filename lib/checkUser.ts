import { prisma } from "./prisma";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "./prisma/client";

export const checkUser = async (): Promise<User | null> => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  try {
    let loggerInUser = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (!loggerInUser) {
      // Create a new user if not found
      loggerInUser = await prisma.user.create({
        data: {
          clerkUserId: user.id,
          name: user.fullName || "Default Name",
          email: user.emailAddresses[0]?.emailAddress || "default@example.com",
          username: user.username || undefined,
          phone: user.phoneNumbers.map(phone => Number(phone.phoneNumber)), // Convert phone numbers to numbers
          emailVerified: false,
          firstName: user.firstName || undefined,
          lastName: user.lastName || undefined,
          profilePictureUrl: user.imageUrl || undefined,
        },
      });
    }

    return loggerInUser;

  } catch (error) {
    console.error("Error checking user:", {
      error,
      userId: user.id,
    });
    return null;
  }
};