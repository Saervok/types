/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Screen from "newui/screen/Screen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Menu from "newui/screen/screens/menu/component/Menu";
export default abstract class MenuScreen extends Screen {
    protected menus: {
        [key: number]: Menu;
    };
    protected menuChain: Menu[];
    /**
     * Returns the visible menu (top of the chain)
     */
    get visibleMenu(): Menu;
    showMenu<M extends Menu = Menu>(menu: MenuId | M, menuInitializer?: (menu: M) => any): this;
    backOneMenu(): this;
    backToFirstMenu(): this;
    /**
     * Gets the menu by the given ID, initializing it if it does not already exist.
     */
    getMenu<M extends Menu = Menu>(menuId: MenuId): M;
    removeFromChain(menu: Menu): this;
    /**
     * Sets the visible menu to be the new top menu. (Removes super-menus, keeps sub-menus)
     */
    setTopMenu(): this;
    /**
     * Sets the given menu to be the new top menu. (Removes super-menus, keeps sub-menus)
     */
    setTopMenu(menu: Menu): this;
    protected onScreenHide(): void;
}
