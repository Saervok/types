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
import Doodad from "doodad/Doodad";
import DoodadManager from "doodad/DoodadManager";
import ActionExecutor from "entity/action/ActionExecutor";
import Player from "entity/player/Player";
import Game from "game/Game";
import ItemManager from "item/ItemManager";
import LanguageManager from "language/LanguageManager";
import ModManager from "mod/ModManager";
import Multiplayer from "multiplayer/Multiplayer";
import NewUi from "newui/NewUi";
import SaveManager from "save/SaveManager";
import Steamworks from "steamworks/Steamworks";
import TileEvent from "tile/TileEvent";
import TileEventManager from "tile/TileEventManager";
export declare enum EventBus {
    Actions = 0,
    DoodadManager = 1,
    Doodads = 2,
    Game = 3,
    Items = 4,
    Language = 5,
    LocalPlayer = 6,
    Mods = 7,
    Multiplayer = 8,
    Players = 9,
    SaveManager = 10,
    Steamworks = 11,
    TileEventManager = 12,
    TileEvents = 13,
    Ui = 14
}
declare const eventBuses: {
    [EventBus.Actions](): typeof ActionExecutor;
    [EventBus.DoodadManager](): typeof DoodadManager;
    [EventBus.Doodads](): typeof Doodad;
    [EventBus.Game](): typeof Game;
    [EventBus.Items](): typeof ItemManager;
    [EventBus.Language](): typeof LanguageManager;
    [EventBus.LocalPlayer](): Player;
    [EventBus.Mods](): typeof ModManager;
    [EventBus.Multiplayer](): typeof Multiplayer;
    [EventBus.Players](): typeof Player;
    [EventBus.SaveManager](): typeof SaveManager;
    [EventBus.Steamworks](): typeof Steamworks;
    [EventBus.TileEventManager](): typeof TileEventManager;
    [EventBus.TileEvents](): typeof TileEvent;
    [EventBus.Ui](): typeof NewUi;
};
export default eventBuses;
export declare module EventBus {
    function register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<(typeof eventBuses)[E]>): void;
    function register(eventBus: EventBus): (constructor: NullaryClass<any>) => void;
    function onEventBusRegistration(eventBus: EventBus, handler: NullaryFunction): void;
}
export declare type EventBusHost<E extends EventBus> = ReturnType<(typeof eventBuses)[E]>;
