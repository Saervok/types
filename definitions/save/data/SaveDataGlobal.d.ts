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
import { ICharacter, ICrafted } from "entity/IHuman";
import { IMilestoneData, Milestone } from "game/milestones/IMilestone";
import { ModState } from "mod/IModInfo";
import { ISavedCharacter } from "newui/screen/screens/menu/menus/character/Character";
import { IHighscore, IOptions } from "save/data/ISaveDataGlobal";
import { IDialogInfo } from "ui/IUi";
import EnumInfo from "utilities/enum/EnumInfo";
export default class SaveDataGlobal {
    static defaultOptions: IOptions;
    gameCrafted: {
        [index: number]: ICrafted;
    };
    gameLastPlayedVersion: string;
    gameHighscores: IHighscore[];
    gamePlayedCount: number;
    options: IOptions;
    playerMilestoneData: {
        [index: number]: IMilestoneData | undefined;
    };
    modManagerModState: {
        [index: string]: ModState;
    };
    modManagerSaveData: {
        [index: string]: any;
    };
    languageManagerSaveData: {
        language?: string;
    };
    utilitiesEnumsAllocated: {
        [index: string]: EnumInfo;
    };
    savedDialogInfo: {
        [index: string]: IDialogInfo;
    };
    multiplayerBannedPlayers: string[];
    multiplayerPreviousGames: {
        [index: string]: IMultiplayerPreviousGame | undefined;
    };
    multiplayerMessageOfTheDay: string;
    characters: ISavedCharacter[];
    newui: {
        [index: string]: any;
    };
    lastServerJoined: string | undefined;
    /**
     * Resets all options to default
     */
    resetOptions(): void;
    /**
     * Resets all milestone progress
     */
    resetMilestones(): void;
}
export interface IMultiplayerPreviousGame {
    character: ICharacter;
    milestoneModifiers: Set<Milestone>;
    lastJoinTime?: number;
}
