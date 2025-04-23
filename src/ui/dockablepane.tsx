import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DomainModels, IComponent, Primitives, studioPro } from "@mendix/extensions-api";

const { pages, domainModels } = studioPro.app.model;
const [domainModel] = await domainModels.loadAll((info: Primitives.UnitInfo) => info.moduleName === 'Playground');
const entity: DomainModels.Entity = domainModel.getEntity("Example");

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <h1>Mendix Studio Pro Extension</h1>
        <p>Hello from an extension!</p>
        {entity.name}
    </StrictMode>
);
