"use client";

import { PasswordInput } from "@/components/input/passwordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword } from "@/service/authService";

const schema = z
  .object({
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    code: z.string().nonempty("Código é obrigatório"),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[0-9]/, "A senha deve conter pelo menos um número")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial"),
    confirmPassword: z
      .string()
      .min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
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
      await resetPassword(data.email, data.code, data.password);
      alert("Senha redefinida com sucesso!");
      router.push("/login");
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      alert("Erro ao redefinir senha. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="flex justify-center my-10 mx-auto rounded-md">
      <div className="flex flex-col w-1/3 rounded-md shadow-md shadow-gray-700 border border-brand-gray-medium p-10 gap-8">
        <h1 className="text-2xl font-bold">Redefinir senha</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <Input
              {...register("email")}
              placeholder="Email"
              variant="form"
              className="w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("code")}
              placeholder="Código"
              variant="form"
              className="w-full"
            />
            {errors.code && (
              <p className="text-red-500 text-sm">{errors.code.message}</p>
            )}
          </div>
          <div>
            <PasswordInput
              {...register("password")}
              placeholder="Senha"
              variant="form"
              className="w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div>
            <PasswordInput
              {...register("confirmPassword")}
              placeholder="Confirmar Senha"
              variant="form"
              className="w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              className="w-full"
              onClick={() => {
                router.push("/login");
              }}
            >
              Cancelar
            </Button>
            <Button type="submit" className="w-full">
              Redefinir senha
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
