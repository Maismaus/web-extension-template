import { IComponent, studioPro } from "@mendix/extensions-api";

class Main implements IComponent {
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "easyenums.OpenEasyEnums",
            caption: "Open Easy Enums pane"
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "Easy Enums",
                initialPosition: "right",
            },
            {
                componentName: "extension/easyenums",
                uiEntrypoint: "dockablepane",
            });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
                if (args.menuId === "easyenums.OpenEasyEnums") {
                    studioPro.ui.panes.open(paneHandle);
                }
            }
        );
    }
}

export const component: IComponent = new Main();
