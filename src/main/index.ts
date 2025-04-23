import { IComponent, studioPro } from "@mendix/extensions-api";

class Main implements IComponent {
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "easyenums.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                { menuId: "easyenums.ShowTabMenuItem", caption: "Show tab" },
                { menuId: "easyenums.ShowDockMenuItem", caption: "Show dock pane" },
                { menuId: "easyenums.HideDockMenuItem", caption: "Hide dock pane" },
            ],
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
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
                if (args.menuId === "easyenums.ShowTabMenuItem") {
                    studioPro.ui.tabs.open(
                        {
                            title: "My Extension Tab",
                        },
                        {
                            componentName: "extension/easyenums",
                            uiEntrypoint: "tab",
                        }
                    );
                }
                else if (args.menuId === "easyenums.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
                else if (args.menuId === "easyenums.HideDockMenuItem") {
                    studioPro.ui.panes.close(paneHandle);
                }
            }
        );
    }
}

export const component: IComponent = new Main();
