"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const validateCPF = (cpf) => {
  const cleaned = cpf.replace(/\D/g, "");
  return cleaned.length === 11;
};

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  cpf: z
    .string()
    .min(11, "CPF deve ter 11 dígitos")
    .max(11, "CPF deve ter 11 dígitos")
    .refine((cpf) => validateCPF(cpf), "CPF inválido"),
  cep: z.string().length(8, "CEP deve ter 8 dígitos"),
  address: z.string().min(1, "Endereço é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  state: z.string().min(2, "Estado é obrigatório"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  photo: z.string().optional(),
});

export default function Profile() {
  const router = useRouter();
  const [photoPreview, setPhotoPreview] = useState("");
  const [addressData, setAddressData] = useState({
    address: "",
    city: "",
    state: "",
    neighborhood: "",
    number: "",
    complement: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // submit pro back
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const fetchAddressData = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        throw new Error("CEP não encontrado");
      }
      setAddressData({
        address: data.addres,
        city: data.city,
        state: data.state,
        neighborhood: data.neighborhood,
        number: "",
        complement: "",
      });
      setValue("address", data.address);
      setValue("city", data.city);
      setValue("state", data.state);
      setValue("neighborhood", data.neighborhood);
    } catch (error) {
      console.error("Erro ao buscar dados do endereço:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex justify-center my-10 mx-auto rounded-md">
      <div className="flex flex-col w-full max-w-2xl rounded-md shadow-md border border-gray-300 p-6 gap-6">
        <div className="flex justify-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-2"
          />
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <Input
              {...register("name")}
              placeholder="Nome Completo"
              className="w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("cpf")}
              placeholder="CPF"
              maxLength={11}
              className="w-full"
            />
            {errors.cpf && (
              <p className="text-red-500 text-sm">{errors.cpf.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("cep")}
              placeholder="CEP"
              maxLength={8}
              className="w-full"
              onBlur={(e) => fetchAddressData(e.target.value)}
            />
            {errors.cep && (
              <p className="text-red-500 text-sm">{errors.cep.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("address")}
              placeholder="Endereço Completo"
              className="w-full"
              value={addressData.address}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("city")}
              placeholder="Cidade"
              className="w-full"
              value={addressData.city}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("state")}
              placeholder="Estado"
              className="w-full"
              value={addressData.state}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register("neighborhood")}
              placeholder="Bairro"
              className="w-full"
              value={addressData.neighborhood}
            />
            {errors.neighborhood && (
              <p className="text-red-500 text-sm">
                {errors.neighborhood.message}
              </p>
            )}
          </div>

          <div>
            <Input
              {...register("number")}
              placeholder="Número"
              className="w-full"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <Input
              {...register("complement")}
              placeholder="Complemento"
              className="w-full"
            />
            {errors.complement && (
              <p className="text-red-500 text-sm">
                {errors.complement.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2 flex gap-2">
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
