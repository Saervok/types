/**
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IHookHost } from "mod/IHookHost";
export declare enum Hook {
    OnBindLoop = "onBindLoop",
    OnBuild = "onBuild",
    OnCraft = "onCraft",
    OnCreateWorld = "onCreateWorld",
    OnCreatureDamage = "onCreatureDamage",
    OnCreatureDeath = "onCreatureDeath",
    OnCreatureSpawn = "onCreatureSpawn",
    OnCreatureTamed = "onCreatureTamed",
    OnDigTreasure = "onDigTreasure",
    OnDisplayMessage = "onDisplayMessage",
    OnDoodadSpawn = "onDoodadSpawn",
    OnEntityKill = "onEntityKill",
    OnGameEnd = "onGameEnd",
    OnGameScreenVisible = "onGameScreenVisible",
    OnGameStart = "onGameStart",
    OnGameTickEnd = "onGameTickEnd",
    OnGameTickStart = "onGameTickStart",
    OnHumanSkillChange = "onHumanSkillChange",
    OnInspectionSection = "onInspectionSection",
    OnItemDamage = "onItemDamage",
    OnItemEquip = "onItemEquip",
    OnItemQuickslot = "onItemQuickslot",
    OnLanguageChange = "onLanguageChange",
    OnMove = "onMove",
    OnMoveComplete = "onMoveComplete",
    OnMoveDirectionUpdate = "onMoveDirectionUpdate",
    OnNoInputReceived = "onNoInputReceived",
    OnNPCDamage = "onNPCDamage",
    OnNPCDeath = "onNPCDeath",
    OnNPCSpawn = "onNPCSpawn",
    OnOpenBook = "onOpenBook",
    OnPickupDoodad = "onPickupDoodad",
    OnPlayerDamage = "onPlayerDamage",
    OnPlayerDeath = "onPlayerDeath",
    OnPlayerJoin = "onPlayerJoin",
    OnPlayerLeave = "onPlayerLeave",
    OnPlayerTickEnd = "onPlayerTickEnd",
    OnPlayerTickStart = "onPlayerTickStart",
    OnPlayerWalkToTilePath = "onPlayerWalkToTilePath",
    OnQueueSoundEffect = "onQueueSoundEffect",
    OnReadMap = "onReadMap",
    OnRenderOverlay = "onRenderOverlay",
    OnSailToCivilization = "onSailToCivilization",
    OnSpawnCreatureFromGroup = "onSpawnCreatureFromGroup",
    OnTileUpdate = "onTileUpdate",
    OnTurnEnd = "onTurnEnd",
    OnTurnStart = "onTurnStart",
    OnUpdateWeight = "onUpdateWeight",
    OnWriteNote = "onWriteNote",
    OnWrittenNote = "onWrittenNote",
    PostExecuteAction = "postExecuteAction",
    PostFieldOfView = "postFieldOfView",
    PostGenerateWorld = "postGenerateWorld",
    PostRender = "postRender",
    PostRenderPostProcess = "postRenderPostProcess",
    PostRenderWorld = "postRenderWorld",
    PreExecuteAction = "preExecuteAction",
    PreExecuteCommand = "preExecuteCommand",
    PreLoadWorldDifferences = "preLoadWorldDifferences",
    PreRender = "preRender",
    PreRenderPostProcess = "preRenderPostProcess",
    PreRenderWorld = "preRenderWorld",
    ProcessInput = "processInput",
    ShouldCraft = "shouldCraft",
    ShouldDisplayMessage = "shouldDisplayMessage",
    ShouldRender = "shouldRender",
    ShouldStopWalkToTileMovement = "shouldStopWalkToTileMovement"
}
export declare const globalHooks: Hook[];
export declare enum HookPriority {
    Lowest = -2000,
    Low = -1000,
    Normal = 0,
    High = 1000,
    Highest = 2000
}
/**
 * A list of all mods that cache a hook indexed by hook priority.
 */
export interface ICachedHook {
    [index: number]: IHookHost[];
    priorities: number[];
}
/**
 * A list of all cached hooks indexed by `Hook`
 */
export declare type ICachedHooks = {
    [hook in Hook]?: ICachedHook;
};
export interface IEmitterHostRegistrationChain {
    until(deregistrationEvent: string | number): void;
}
