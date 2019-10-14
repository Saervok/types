/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Milestone } from "game/milestones/IMilestone";
import { ServerInfo } from "multiplayer/IMultiplayer";
import Button from "newui/component/Button";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class JoinServerChooseModifiersMenu extends Menu {
    readonly buttonMilestoneModifiers: Button;
    readonly milestones: Set<Milestone>;
    multiplayerServerToJoin: ServerInfo;
    private milestoneModifiersMenu;
    constructor();
    protected refresh(): void;
    private getMilestoneModifiersMenu;
}