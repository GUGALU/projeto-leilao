"use client";

import React from "react";

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">401</h1>
        <p className="mt-4 text-xl">Você não está autorizado a acessar esta página.</p>
        <p className="mt-2 text-gray-600">Verifique suas credenciais ou entre em contato com o suporte.</p>
        <a href="/" className="mt-6 text-blue-500 underline">Voltar para a página inicial</a>
      </div>
    </div>
  );
}
