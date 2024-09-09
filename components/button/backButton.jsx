import React from "react";
import { Button } from "../ui/button";
import { t } from "i18next";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.back();
      }}
    >
      {t("Back")}Voltar
    </Button>
  );
};

export { BackButton };
