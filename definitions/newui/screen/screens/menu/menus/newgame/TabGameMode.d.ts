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
import { Events, IEventEmitter } from "event/EventEmitter";
import { GameMode } from "game/options/IGameOptions";
import { Block } from "newui/component/Block";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import ChoiceListTurnMode from "newui/screen/screens/menu/component/ChoiceListTurnModes";
import { Tab } from "newui/screen/screens/menu/component/Menu";
import CustomGameOptionsMenu from "newui/screen/screens/menu/menus/newgame/CustomGameOptionsMenu";
import NewGameMenu from "newui/screen/screens/menu/menus/NewGameMenu";
export default class TabGameMode extends Tab {
    private readonly menu;
    customGameOptionsMenu: CustomGameOptionsMenu;
    readonly maxSavesWarning: Block;
    readonly gameMode: ChoiceList<DifficultyChoice, false>;
    readonly turnMode: ChoiceListTurnMode;
    constructor(menu: NewGameMenu);
    setAtMaxSaves(maxSaves: boolean): void;
    private getCustomGameOptionsMenu;
    private updateGameMode;
    private onChangeTurnMode;
}
interface IDifficultyChoiceEvents extends Events<Choice> {
    customizeDifficulty(): any;
    updateDailyChallenge(): any;
}
declare class DifficultyChoice extends Choice<GameMode> {
    readonly difficulty: GameMode;
    event: IEventEmitter<this, IDifficultyChoiceEvents>;
    isDailyChallenge: boolean;
    private dailyChallengeButton?;
    constructor(difficulty: GameMode);
    setDailyChallenge(dailyChallenge?: boolean): void;
    private customizeDifficulty;
}
export {};
