"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [data, setData] = useState({
    activeAuctions: 0,
    lastWonItems: [],
    lastRegisteredUsers: [],
    totalSales: 0,
  });

  const unprotectedRoutes = ["/login", "/register", "/recovery-password", "/change-password"];

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (!unprotectedRoutes.includes(router.pathname) && !storedToken) {
      router.push("/login");
    } else {
      // Simulate fetching dashboard data
      const mockData = {
        activeAuctions: 12,
        lastWonItems: ["Item 1", "Item 2", "Item 3"],
        lastRegisteredUsers: ["User 1", "User 2", "User 3"],
        totalSales: 4520,
      };
      setData(mockData);
    }
  }, [router]);

  return (
    <div className="flex flex-col w-10/12 mx-auto mt-10 gap-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 border shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Leilões Ativos</h2>
          <p className="text-2xl">{data.activeAuctions}</p>
        </div>

        <div className="p-4 border shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Total de Vendas Realizadas</h2>
          <p className="text-2xl">{data.totalSales}</p>
        </div>

        <div className="p-4 border shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Últimos Itens Arrematados</h2>
          <ul className="list-disc list-inside">
            {data.lastWonItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 border shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Últimos Usuários Cadastrados</h2>
          <ul className="list-disc list-inside">
            {data.lastRegisteredUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
