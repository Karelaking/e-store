import React from "react";
import { Role } from "@/lib/prisma/enums";
import { redirect } from "next/navigation";
import { checkUser } from "@/lib/checkUser";
import { onboardingAction } from "@/actions";
import { Container } from "@/components/server";

export const dynamic = "force-dynamic"; // Mark this page as dynamic

const page = async (): Promise<React.ReactNode> => {
  const user = await checkUser();

  if (user?.role !== Role.UNREGISTERED) {
    redirect("/"); // Redirect to the home page
    return null;
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Welcome to E-Store!</h1>
      <p className="mb-6">To get started, please select your role:</p>
      <form action={onboardingAction} className="flex flex-col gap-4">
        <select name="role" className="p-2 border border-gray-300 rounded">
          <option value="">Select your role</option>
          <option value={Role.BUYER}>Buyer</option>
          <option value={Role.SELLER}>Seller</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </form>
    </Container>
  );
};

export default page;
