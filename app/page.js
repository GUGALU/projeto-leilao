"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HomeCharts } from "@/components/home-charts/homeCharts";
import { ChartContainer } from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  LabelList,
  XAxis,
  YAxis,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";

export default function Dashboard() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [data, setData] = useState({
    totalSales: 4520.0,
  });

  const unprotectedRoutes = [
    "/login",
    "/register",
    "/recovery-password",
    "/change-password",
  ];

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (!unprotectedRoutes.includes(router.pathname) && !storedToken) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex flex-col w-10/12 mx-auto mt-10 gap-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-4 border shadow-md rounded-md h-max">
          <h2 className="text-xl font-semibold">Total de Vendas Realizadas</h2>
          <p className="text-2xl">R$ {data.totalSales}</p>
        </Card>

        <Card className="w-full h-max">
          <CardHeader>
            <CardTitle>Progresso dos Leilões</CardTitle>
            <CardDescription>
              Comparação entre leilões de diferentes períodos.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                120
                <span className="text-sm font-normal text-muted-foreground">
                  leilões
                </span>
              </div>
              <ChartContainer
                config={{
                  auctions: {
                    label: "Leilões Ativos",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2024",
                      auctions: 120,
                    },
                  ]}
                >
                  <Bar
                    dataKey="auctions"
                    fill="var(--color-auctions)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="white"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="auctions" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                85
                <span className="text-sm font-normal text-muted-foreground">
                  leilões
                </span>
              </div>
              <ChartContainer
                config={{
                  auctions: {
                    label: "Leilões Anteriores",
                    color: "hsl(var(--muted))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2023",
                      auctions: 85,
                    },
                  ]}
                >
                  <Bar
                    dataKey="auctions"
                    fill="var(--color-auctions)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="hsl(var(--muted-foreground))"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="auctions" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full h-max">
          <CardHeader>
            <CardTitle>Leilões atuais</CardTitle>
            <CardDescription>
              Comparação entre os status dos leilões.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">Ativos</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  15/20
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">Concluídos</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  25/30
                </div>
              </div>
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-sm text-muted-foreground">Cancelados</div>
                <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                  5/10
                </div>
              </div>
            </div>

            <ChartContainer
              config={{
                active: {
                  label: "Ativos",
                  color: "hsl(var(--chart-1))",
                },
                completed: {
                  label: "Concluídos",
                  color: "hsl(var(--chart-2))",
                },
                cancelled: {
                  label: "Cancelados",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="mx-auto aspect-square w-full max-w-[80%]"
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    activity: "active",
                    value: (15 / 20) * 100,
                    fill: "var(--color-active)",
                  },
                  {
                    activity: "completed",
                    value: (25 / 30) * 100,
                    fill: "var(--color-completed)",
                  },
                  {
                    activity: "cancelled",
                    value: (5 / 10) * 100,
                    fill: "var(--color-cancelled)",
                  },
                ]}
                innerRadius="20%"
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  dataKey="value"
                  tick={false}
                />
                <RadialBar dataKey="value" background cornerRadius={5} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
