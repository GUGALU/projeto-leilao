"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PasswordInput } from "@/components/input/passwordInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex justify-center my-10 mx-auto rounded-md">
      <div className="flex flex-col w-1/3 rounded-md shadow-md shadow-gray-700 border border-brand-gray-medium p-10 gap-8">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col gap-4">
          <Input placeholder="Email" variant="form" />
          <PasswordInput
            placeholder="Senha"
            variant="form"
            className="col-span-1 lg:col-span-2"
          />
        </div>
        <div>
          <Button
            className="w-full"
            onClick={() => {
              console.log("login");
            }}
          >
            Entrar
          </Button>
        </div>
        <div>
          <Button
            variant="link"
            className="w-full"
            onClick={() => router.push("/recovery-password")}
          >
            Esqueci minha senha
          </Button>
          <Button
            variant="link"
            className="w-full"
            onClick={() => (router.push("/register"))}
          >
            Criar conta
          </Button>
        </div>
      </div>
    </div>
  );
}
