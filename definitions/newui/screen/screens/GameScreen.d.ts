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
import { IDamageInfo } from "entity/creature/ICreature";
import Human from "entity/Human";
import Player from "entity/player/Player";
import { Events, IEventEmitter } from "event/EventEmitter";
import { IMapRequest } from "game/IGame";
import { BookType } from "item/IItem";
import { IHookHost } from "mod/IHookHost";
import Component from "newui/component/Component";
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
import Screen from "newui/screen/Screen";
import Dialog from "newui/screen/screens/game/component/Dialog";
import QuadrantComponent, { Quadrant } from "newui/screen/screens/game/component/QuadrantComponent";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import { QuadrantComponentId } from "newui/screen/screens/game/IGameScreenApi";
import MenuBar from "newui/screen/screens/game/static/MenuBar";
import Messages from "newui/screen/screens/game/static/Messages";
import Quickslots from "newui/screen/screens/game/static/Quickslots";
import StatsQuadrant from "newui/screen/screens/game/static/Stats";
import MovementHandler from "newui/screen/screens/game/util/movement/MovementHandler";
import WorldTooltipHandler from "newui/screen/screens/game/WorldTooltip";
import WorldTooltipHandler2 from "newui/screen/screens/game/WorldTooltip2";
import { ITile } from "tile/ITerrain";
import { Direction } from "utilities/math/Direction";
import { IVector2 } from "utilities/math/IVector";
export declare type IDialogStates = {
    [key in DialogId]: boolean;
};
interface IGameScreenEvents extends Events<Screen> {
    hideDialog(dialog: DialogId): any;
    showDialog(dialogId: Dialog): any;
}
export declare let gameScreen: GameScreen | undefined;
export default class GameScreen extends Screen implements IHookHost {
    event: IEventEmitter<this, IGameScreenEvents>;
    readonly dialogs: Map<DialogId, Dialog>;
    visibleDialogs: IDialogStates;
    quadrantComponentQuadrants: OptionalDescriptions<QuadrantComponentId, Quadrant>;
    menuBar: MenuBar;
    stats: StatsQuadrant;
    quickslots: Quickslots;
    messages: Messages;
    movementHandler: MovementHandler;
    readonly worldTooltipHandler: WorldTooltipHandler;
    readonly worldTooltipHandler2: WorldTooltipHandler2;
    private quadrantContainer;
    private readonly quadrantMap;
    private readonly quadrantComponents;
    private readonly gameCanvas;
    private readonly placeholders;
    constructor();
    openDialog<D = Dialog>(id: DialogId): D;
    closeDialog(id: DialogId): Promise<this>;
    toggleDialog(id: DialogId, force?: boolean): this;
    toggleDialogs(states: IDialogStates): this;
    getQuadrantComponents(): import("@wayward/goodstream/Stream").default<QuadrantComponent>;
    getQuadrantComponent<C extends QuadrantComponent = QuadrantComponent>(id: QuadrantComponentId): (never extends C ? QuadrantComponent : C extends never[] ? QuadrantComponent | C : {} extends C ? QuadrantComponent | Partial<QuadrantComponent> : QuadrantComponent | C) | undefined;
    getQuadrantContainer(): Component;
    isMouseWithin(): boolean;
    wasMouseStartWithin(): boolean;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onMove(player: Player, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
    onMoveComplete(player: Player): void;
    onPlayerDamage(player: Player, damageInfo: IDamageInfo): number | undefined;
    onPlayerDeath(player: Player): boolean | undefined;
    onPlayerWalkToTilePath(player: Player, path: IVector2[] | undefined): void;
    onGameTickEnd(): void;
    onOpenBook(human: Human, book: BookType): void;
    onReadMap(player: Player, mapRequest: IMapRequest): void;
    protected create(): void;
    protected tryShowWorldTooltip(): Promise<void>;
    /**
     * Adds a quadrant element to the screen.
     *
     * The quadrant is decided following these steps:
     * 1. Starts with the `preferredQuadrant` of the element.
     * 2. If the quadrant is `Quadrant.None`, or the quadrant is already used,
     * use instead the result of `getUnusedQuadrant()`
     */
    private addQuadrantComponent;
    /**
     * Event handler for `QuadrantElementEvent.ChangeQuadrant`
     *
     * The element that is changing quadrants switches places with the element already in that quadrant.
     *
     * If the element is changing to `Quadrant.None`, it is removed from the `quadrantMap`. If the element
     * was in `Quadrant.None` and is switching places with another element, that element is removed
     * from the `quadrantMap`.
     */
    private onQuadrantComponentChange;
    private onSwitchQuadrantComponents;
    /**
     * Handles top/bottom quadrants (for when in two-column mode)
     */
    private updateQuadrantPositions;
    /**
     * Returns the first unused `Quadrant`, or `Quadrant.None` if there are none.
     */
    private getUnusedQuadrant;
    private onDialogClose;
    private updatePauseIcon;
}
export {};
