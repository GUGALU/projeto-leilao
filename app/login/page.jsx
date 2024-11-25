"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PasswordInput } from "@/components/input/passwordInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticateUser } from "@/service/authService";

const schema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await authenticateUser(data);
      const { token } = response;
      localStorage.setItem("token", token);
      router.push("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Falha na autenticação. Verifique suas credenciais.");
    }
  };

  return (
    <div className="flex justify-center my-10 mx-auto rounded-md">
      <div className="flex flex-col w-1/3 rounded-md shadow-md shadow-gray-700 border border-brand-gray-medium p-10 gap-8">
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <Input
              placeholder="Email"
              variant="form"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <PasswordInput
              placeholder="Senha"
              variant="form"
              className="col-span-1 lg:col-span-2"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
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
            onClick={() => router.push("/register")}
          >
            Criar conta
          </Button>
        </div>
      </div>
    </div>
  );
}
