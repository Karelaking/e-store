"use server"

import { setUserRole } from "./setUserRole.action"
import { Role } from "@/lib/prisma/enums";

export const onboardingAction = async (data: FormData) => {
  const role = data.get("role") as Role;

  await setUserRole(role);
};
