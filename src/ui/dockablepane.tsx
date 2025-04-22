import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { studioPro } from "@mendix/extensions-api";

const enums = studioPro.app.model.enumerations;

createRoot(document.getElementById("root")!).render(
    <StrictMode>

    </StrictMode >
);
