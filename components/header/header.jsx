"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { BackButton } from "../button/backButton";

const Header = () => {
  const router = useRouter();
  const [disable, setDisable] = useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <div className="relative z-50 w-full shadow-lg">
      <div className="mx-auto my-6 flex w-full flex-row justify-between px-4 md:my-7 2xl:w-10/12">
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-center gap-2">
            <BackButton />
            <Button
              onClick={() => router.push("/")}
              className="hidden h-10 md:flex"
              disabled={disable}
            >
              <span>Home</span>
            </Button>
            <Button
              onClick={() => router.push("/register")}
              className="hidden h-10 md:flex"
            >
              <span>Registrar-se</span>
            </Button>
            <Button
              onClick={() => router.push("/login")}
              className="hidden h-10 md:flex"
            >
              <span>Login</span>
            </Button>
            <Button
              onClick={() => router.push("/profile")}
              className="hidden h-10 md:flex"
            >
              <span>Perfil</span>
            </Button>
          </div>
          <div>
            <Button
              onClick={() => handleLogout()}
              className="hidden h-10 md:flex"
            >
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
