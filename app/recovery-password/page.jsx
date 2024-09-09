"use client";
import { PasswordInput } from "@/components/input/passwordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useRouter } from "next/navigation";

export default function RecoveryPassword() {
  const router = useRouter();
  return (
    <div className="flex justify-center my-10 mx-auto rounded-md">
      <div className="flex flex-col w-1/3 rounded-md shadow-md shadow-gray-700 border border-brand-gray-medium p-10 gap-8">
        <h1 className="text-2xl font-bold">Recuperar senha</h1>
        <div className="flex flex-col gap-4">
          <Input placeholder="Email" variant="form" />
        </div>
        <div className="flex justify-center items-start gap-2">
          <Button
            className="w-full"
            onClick={() => {
              router.push("/login");
            }}
          >
            Cancelar
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              router.push("/change-password");
            }}
          >
            Redefinir senha
          </Button>
        </div>
      </div>
    </div>
  );
}
