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
import Creature from "entity/creature/Creature";
import { CreatureType } from "entity/creature/ICreature";
import Human from "entity/Human";
import { EntityType, IStatChangeInfo, StatusEffectChangeReason, StatusType } from "entity/IEntity";
import { EquipType, ICheckUnderOptions, IRestData, RestCancelReason, RestType, SkillType } from "entity/IHuman";
import { IStat, Stat } from "entity/IStats";
import { IMovementIntent, IPlayerEvents, TurnType, WeightStatus } from "entity/player/IPlayer";
import MessageManager from "entity/player/MessageManager";
import NoteManager from "entity/player/note/NoteManager";
import QuestManager from "entity/player/quest/QuestManager";
import { StatChangeTimerFactory } from "entity/StatFactory";
import { IEventEmitter } from "event/EventEmitter";
import { Milestone } from "game/milestones/IMilestone";
import { IGameOptionsPlayer } from "game/options/IGameOptions";
import { IContainer, ItemType, RecipeLevel } from "item/IItem";
import Item from "item/Item";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IExploreMap } from "renderer/IExploreMap";
import IClientStore from "save/clientStore/IClientStore";
import { IOptions } from "save/data/ISaveDataGlobal";
import { IContainerSortInfo, IContextMenuAction, IDialogInfo, IQuickSlotInfo } from "ui/IUi";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default class Player extends Human {
    event: IEventEmitter<this, IPlayerEvents>;
    readonly entityType: EntityType.Player;
    absentLastUsedTime: number;
    containerSortInfo: {
        [index: string]: IContainerSortInfo;
    };
    dialogContainerInfo: {
        [index: number]: IDialogInfo;
    };
    dialogInfo: {
        [index: string]: IDialogInfo;
    };
    hintSeen: boolean[];
    isConnecting: boolean;
    lastIslandId: string;
    shouldApplyTravelingEffects: boolean;
    isMoving: boolean;
    lastAttackedBy: Human | Creature | undefined;
    movementCompleteZ: number | undefined;
    name: string;
    quests: QuestManager;
    quickSlotInfo: IQuickSlotInfo[];
    realTimeTickActionDelay: number;
    revealedItems: {
        [index: number]: boolean;
    };
    spawnPoint: IVector3;
    tamedCreatures: Map<string, number[]>;
    turns: number;
    walkSoundCounter: number;
    milestoneModifiers: Set<Milestone>;
    messages: MessageManager;
    notes: NoteManager;
    walkPath: IVector2[] | undefined;
    exploredMap: IExploreMap[] | undefined;
    isMovingClientside: boolean;
    finishedMovingClientside: boolean;
    nextX: number;
    nextY: number;
    movementProgress: number;
    movementFinishTime: number;
    nextMoveTime: number;
    nextMoveDirection: Direction | undefined;
    displayCreature?: CreatureType;
    private readonly _movementIntent;
    private readonly milestonesCollection;
    private gameOptionsCached?;
    private handEquippedToLast;
    private cachedMovementPenalty?;
    private updateTablesOnNoInput?;
    constructor(identifier?: string);
    get clientStore(): IClientStore;
    setOptions(options: IOptions): void;
    getGameOptionsBeforeModifiers(): IGameOptionsPlayer;
    getGameOptions(): IGameOptionsPlayer;
    getDisplayCreature(): CreatureType | undefined;
    setStatChangeTimerIgnoreDifficultyOptions(stat: Stat | IStat, timer: number, amt?: number): void;
    setStatus(status: StatusType, hasStatus: boolean, reason: StatusEffectChangeReason): void;
    startResting(restData: IRestData): void;
    cancelResting(reason: RestCancelReason): boolean;
    showRestInterrupt(restType: RestType): void;
    /**
     * Updates caused by status effects such as bleeding, poison, and burns.
     */
    tickStatuses(): void;
    resetMovementStates(): void;
    changeId(id: number): void;
    setPaddling(paddling: boolean, itemId: number): boolean;
    skillGain(skillType: SkillType, mod?: number, bypass?: boolean): void;
    checkSkillMilestones(): void;
    addMilestone(milestone: Milestone, data?: number, update?: boolean): void;
    getDefaultCarveTool(): Item | undefined;
    isFacingCarvableTile(): boolean;
    hasTamedCreature(creature: Creature): boolean;
    hasHandToUse(): boolean;
    getAndSwitchHandToUse(): EquipType | undefined;
    /**
     * Ensure handToUse is valid given the players options
     */
    updateHandToUse(): void;
    equip(item: Item, slot: EquipType, internal?: boolean, switchingHands?: boolean): void;
    unequip(item: Item, internal?: boolean, skipMessage?: boolean, switchingHands?: boolean): void;
    unequipAll(): void;
    getMovementIntent(): IMovementIntent;
    updateMovementIntent(movementIntent: IMovementIntent): void;
    resetStatTimers(): void;
    /**
     * Gets the max health of the player.
     *
     * Returns the result of the `"getMaxHealth"` event, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     */
    getMaxHealth(): number;
    getCraftingDifficulty(level: RecipeLevel): number;
    /**
     * Gets the strength of the player.
     *
     * Returns the result of `Hook.GetPlayerStrength`, or the `max` in `Stat.Health`,
     * if the result of the hook is `undefined`.
     *
     * Used internally for `Stat.Weight.max`
     */
    getMaxWeight(): number;
    setupLoad(): void;
    setup(): void;
    updateReputation(reputation: number): void;
    getWeightStatus(): WeightStatus;
    getWeightOrStaminaMovementPenalty(): number;
    /**
     * Check if there is a still in front of the player.
     * @param withWater Check if the still has water in it?
     * @param isLit Check if the still is lit?
     */
    checkForStill(withWater?: boolean, isLit?: boolean): boolean;
    checkForWell(): boolean;
    checkForGather(): Doodad | undefined;
    onNoInput(): void;
    updateTables(deferUpdate?: boolean): void;
    updateCraftTable(adjacentContainers?: IContainer[]): void;
    updateDismantleTable(adjacentContainers?: IContainer[]): void;
    updateTablesAndWeight(source: string, deferTableUpdates?: boolean): void;
    checkReputationMilestones(): void;
    hurtHands(damageMessage: Message, toolMessage?: Message, hurtHandsMessage?: Message): boolean;
    setTamedCreatureEnemy(enemy: Player | Creature): void;
    setPosition(point: IVector3): void;
    getNextPosition(): IVector3;
    /**
     * @param effects If true, adds a delay to the player, clears any particles, and updates the view. (Default: true)
     */
    setZ(z: number, effects?: boolean): void;
    isGhost(): boolean;
    isServer(): boolean;
    getName(): Translation;
    canSeePosition(tileX: number, tileY: number, tileZ: number, isClientSide?: boolean): boolean;
    markAsExplored(points: IVector2[]): boolean | undefined;
    updateQuickSlotInfo(quickSlot: number, itemType?: ItemType, action?: IContextMenuAction): void;
    updateDialogInfo(dialogIndex: string | number): void;
    getDialogInfo(dialogIndex: string | number): IDialogInfo;
    passTurn(turnType?: TurnType): void;
    tick(isPassTurn?: boolean): void;
    kill(): void;
    respawn(): void;
    getMovementProgress(): number;
    checkUnder(inFacingDirection?: boolean, options?: ICheckUnderOptions): ICheckUnderOptions;
    hasWalkPath(): boolean;
    walkAlongPath(path: IVector2[] | undefined): void;
    /**
     * This is only ran on the server
     */
    processInput(timeStamp: number): IMovementIntent | undefined;
    /**
     * Returns true if the player changed their facing direction.
     */
    faceDirection(direction: Direction, turnDelay?: number): boolean;
    revealItem(itemType: ItemType): void;
    getMovementFinishTime(timeStamp: number): number;
    healthSyncCheck(reason: string): void;
    /**
     * This needs to be called whenever the player's strength requires an update.
     *
     * Example usage includes:
     * 1. When max health changes. Max health is used in calculating the strength.
     * 2. If a mod is using the `GetPlayerStrength` hook and the calculation needs to be refreshed.
     */
    updateStrength(): void;
    /**
     * Returns the bartering bonus for a given credit value
     */
    getBarteringBonus(baseCredits: number): number;
    /**
     * Applies traveling effects to the player
     * Includes stat loss & item damages
     */
    applyTravelingEffects(sailToCivilization?: boolean): void;
    /**
     * Check if a position is marked as explored
     * Only use this clientside
     */
    isExploredClientSide(x: number, y: number, z: number): boolean;
    /**
     * @deprecated Do not call this with players.
     */
    moveTo(): boolean;
    protected getApplicableStatusEffects(): Set<StatusType>;
    protected getBaseStatBonuses(): OptionalDescriptions<Stat, number>;
    protected getSkillGainMultiplier(skillType: SkillType): number;
    protected calculateStats(): void;
    protected swimAndSootheCheck(): void;
    /**
     * Event handler for when a status effect is applied or removed.
     */
    protected onStatusEffectChanged(status: StatusType, has: boolean): void;
    /**
     * Event handler for `EntityEvent.StatChanged`. Handles special functionality when stats are increased:
     * 1. When resting & stamina is full, resting will be cancelled.
     * 2. Health is sync-checked.
     * 3. When hunger > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     * 4. When thirst > maximum, damage will be dealt, stamina will be decreased, and a message will be displayed.
     */
    protected onStatChange(stat: IStat, oldValue: number, info: IStatChangeInfo): void;
    /**
     * Applies stat change timer multipliers from game difficulty options
     */
    protected onSetStatChangeTimer(stat: Stat | IStat, change: StatChangeTimerFactory): false | undefined;
    private slitherSuckerDamage;
    private processMovement;
    /**
     * Event handler for when resting begins, weight changes, or strength changes.
     */
    private onStaminaUseChanged;
    private restTick;
    private staminaSyncCheck;
    private canWriteInHours;
    private canWriteNote;
    private onWriteNote;
    private shouldDisplayMessage;
    private onDisplayMessage;
    get asNPC(): undefined;
    get asPlayer(): Player;
}
