"use server"

import { setUserRoleAction } from "./setUserRole.action"
import { Role } from "@/lib/prisma/enums";

export const onboardingAction = async (data: FormData) => {
  const role = data.get("role") as Role;

  await setUserRoleAction(role);
};
