"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/store/user.store";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Login = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const { login } = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(input);
      if (res) {
        router.replace("/");
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
      <div className="border-2 bg-gradient-to-b from-light-blue-100 to-light-blue-200 p-4 rounded-2xl flex flex-col sm:min-w-1/2 min-w-4/5 items-center">
        <div className="flex border-b-4 w-full justify-center">
          <h1 className="max-sm:text-[2rem] text-4xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 text-transparent bg-clip-text leading-tight xl:tracking-[-2px] font-semibold">
            Login
          </h1>
        </div>
        <form
          className="my-4 flex flex-col items-start gap-5 w-full"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full flex flex-col gap-1">
            <Label>Email</Label>
            <Input className="" name="email" onChange={handleChange} />
          </div>
          <div className="relative w-full flex flex-col gap-1">
            <Label>Password</Label>
            <Input
              className=""
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <Button
            className="bg-blue-500 text-white rounded-full px-4 py-2 cursor-pointer w-full"
            type="submit"
          >
            {isLoading ? (
              <Loader className="animate-spin text-white" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
        <div className="my-2">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 font-semibold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
