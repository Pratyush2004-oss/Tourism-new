"use client";
import { useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Account = () => {
  const { user } = useUserStore();
  const navigate = useRouter();
  useEffect(() => {
    if (!user) {
      navigate.push("/login");
    }
  }, [user]);
  return <div>Account</div>;
};

export default Account;
