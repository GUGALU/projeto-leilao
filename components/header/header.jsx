"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { BackButton } from "../button/backButton";

const Header = () => {
  const router = useRouter();

  return (
    <div className="relative z-50 w-full shadow-lg">
      <div className="mx-auto my-6 flex w-full flex-row justify-between px-4 md:my-7 2xl:w-10/12">
        <div className="flex items-center justify-center gap-2">
          <BackButton/>
          <Button
            onClick={() => router.push("/")}
            className="hidden h-10 md:flex"
          >
            <span>Home</span>
          </Button>
          <Button
            onClick={() => router.push("/register")}
            className="hidden h-10 md:flex"
          >
            <span>Registrar-se</span>
          </Button>
          <Button
            onClick={() => router.push("/login")}
            className="hidden h-10 md:flex"
          >
            <span>Login</span>
          </Button>
          <Button
            onClick={() => router.push("/profile")}
            className="hidden h-10 md:flex"
          >
            <span>Perfil</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Header };
