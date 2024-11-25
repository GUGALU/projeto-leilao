"use client";
import { PasswordInput } from "@/components/input/passwordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useRouter } from "next/navigation";
import { sendVerificationEmail } from "@/service/authService";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
});

export default function RecoveryPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await sendVerificationEmail(data);
      router.push("/change-password");
    } catch (error) {
      console.error("Erro ao enviar o email de verificação:", error);
    }
  };

  return (
    <div className="flex justify-center my-10 mx-auto rounded-md">
      <div className="flex flex-col w-1/3 rounded-md shadow-md shadow-gray-700 border border-brand-gray-medium p-10 gap-8">
        <h1 className="text-2xl font-bold">Recuperar senha</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <div className="flex justify-center items-start gap-2 mt-4">
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
