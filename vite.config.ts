import { defineConfig, ResolvedConfig, UserConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            formats: ["es"],
            entry: {
                main: "src/main/index.ts",
                ui: "src/ui/index.tsx",
                dockablepane: "src/ui/dockablepane.tsx"
            }
        },
        rollupOptions: {
            external: ["@mendix/component-framework", "@mendix/model-access-sdk"]
        },
        outDir: "../../Mendix/Playground-main/webextensions/easyenums",
        target: "esnext"
    }
} satisfies UserConfig);
