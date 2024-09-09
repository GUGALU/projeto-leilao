"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Função para validar CPF (simples, para propósitos de exemplo)
const validateCPF = (cpf) => {
  const cleaned = cpf.replace(/\D/g, "");
  if (cleaned.length !== 11) return false;
  // Validação básica de CPF
  // Para validação completa, considere usar uma biblioteca como cpf-check
  return true;
};

// Definindo o esquema de validação com zod
const schema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    cpf: z
      .string()
      .min(11, "CPF deve ter 11 dígitos")
      .max(11, "CPF deve ter 11 dígitos")
      .refine((cpf) => validateCPF(cpf), "CPF inválido"),
    address: z.string().min(1, "Endereço é obrigatório"),
    photo: z.string().optional(),
  });

export default function Profile() {
  const router = useRouter();
  const [photoPreview, setPhotoPreview] = useState("");
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Lógica para atualizar o perfil
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center my-10 mx-auto rounded-md">
      <div className="flex flex-col w-full max-w-md rounded-md shadow-md border border-gray-300 p-6 gap-4">
        <h1 className="text-2xl font-bold">Editar Perfil</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <Input
              {...register("name")}
              placeholder="Nome Completo"
              variant="form"
              className="w-full"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <Input
              {...register("cpf")}
              placeholder="CPF"
              variant="form"
              className="w-full"
              maxLength={11}
            />
            {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}
          </div>
          <div>
            <Input
              {...register("address")}
              placeholder="Endereço Completo"
              variant="form"
              className="w-full"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2"
            />
            {photoPreview && <img src={photoPreview} alt="Preview" className="w-32 h-32 object-cover rounded-full" />}
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Atualizar
            </Button>
            <Button
              type="button"
              className="w-full"
              onClick={() => router.push("/")}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
