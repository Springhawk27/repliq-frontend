import DashboardLayout from "@/components/Layouts/DashboardLayout";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const DashbboardPage = () => {
  const { data: session } = useSession();

  return (
    <div className="text-center">
      <h1 className="text-xl">Welcome to dashboard {session?.user?.name}</h1>
      <p className="text-lg">Your Email: {session?.user?.email}</p>
    </div>
  );
};

export default DashbboardPage;

DashbboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
