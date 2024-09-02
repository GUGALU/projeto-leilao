import React from "react";
import { Button } from "../ui/button";
import { t } from "i18next";

const BackButton = () => {
  return (
    <Button
      onClick={() => {
        window.history.back();
      }}
      variant="outline"
    >
      {t("Back")}Voltar
    </Button>
  );
};

export { BackButton };
