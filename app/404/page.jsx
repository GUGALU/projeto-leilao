"use client"

import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl">Página não encontrada.</p>
        <p className="mt-2 text-gray-600">A página que você está procurando não existe ou foi movida.</p>
        <a href="/" className="mt-6 text-blue-500 underline">Voltar para a página inicial</a>
      </div>
    </div>
  );
}
