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
import { EquipType, SkillType } from "entity/IHuman";
import { IContainer, IDismantleComponent, ItemType } from "item/IItem";
import Item from "item/Item";
import ItemRecipeRequirementChecker from "item/ItemRecipeRequirementChecker";
import Message from "language/dictionary/Message";
import { IBindHandlerApi } from "newui/input/Bind";
import { SortType } from "SortType";
import { ISortableEvent } from "ui/functional/IFunctionalSortable";
import { DialogId, IContainerSortInfo, IContextMenuAction, IDialogInfo } from "ui/IUi";
import BaseScreen from "ui/screens/BaseScreen";
import { Direction } from "utilities/math/Direction";
export declare enum TextElementId {
    Weight = 0,
    Attack = 1,
    Defense = 2,
    Reputation = 3
}
declare global {
    interface JQuery {
        contextmenu(p: any, p2?: any, p3?: any): any;
        isVisible(): boolean;
        quickShow(): void;
        quickHide(): void;
        getQuickSlot(): number;
        getEquipSlot(): number;
    }
    interface JQuery {
        sort(p: (a: any, b: any) => boolean): any;
    }
}
export default class InGameScreen extends BaseScreen {
    overlayBindCatcherId: number;
    shouldResetMovement: boolean;
    shouldCancelSorting: boolean;
    isQuickmoving: boolean;
    elementVisibleInGame: JQuery;
    elementCanvas: JQuery;
    elementQuickSlotsContainer: JQuery;
    elementActions: JQuery;
    elementDialogs: JQuery;
    elementDialogInventory: JQuery;
    elementDialogInventoryContainer: JQuery;
    elementDialogCrafting: JQuery;
    elementDialogCraftingContainer: JQuery;
    elementDialogDismantleContainer: JQuery;
    elementDialogCraftingButton: JQuery;
    elementDialogDismantleButton: JQuery;
    elementDialogEquipment: JQuery;
    elementDialogEquipmentContainer: JQuery;
    elementVersion: JQuery;
    elementContainerDialogs: JQuery[];
    elementOtherDialogs: JQuery[];
    contextMenuOpen: boolean;
    private contextMenu;
    private contextMenuTarget;
    private contextMenuLastTarget;
    private lastContextMenuPosition;
    private actionsMenuOpen;
    private actionsMenuCentered;
    private activeContainer;
    private multipleContainersOpened;
    private contextMenuBindPressed;
    private sortableElement;
    private sortableElementPosition;
    private sortableElementTargetContainer;
    private sortingCancelled;
    private onSortableAction;
    private isCurrentlySorting;
    private craftableItemTypes;
    private nonCraftableItemTypes;
    selector(): string;
    bindElements(): void;
    changeEquipmentOption(id: "leftHand" | "rightHand"): void;
    toggleCraftingTab(which: "crafting" | "dismantle", canClose?: boolean): void;
    toggleCraftingTabElements(which: "crafting" | "dismantle"): void;
    unbindElements(): void;
    bindSortable(element: JQuery): void;
    pressHotKey(hotKeyNumber: number): boolean;
    useQuickSlot(slot: number): boolean;
    isSorting(): boolean;
    runSortableAction(sortable: JQuery, action: string, ...data: any[]): void;
    runGlobalSortableAction(action: string, ...data: any[]): void;
    cancelSorting(): void;
    setupContextMenu(): any;
    onShow(): void;
    makeTopDialog(dialog: JQuery): void;
    onHide(): void;
    initializeGameState(): void;
    onGameEnd(): void;
    getDialogIndex(dialogId: DialogId, customDialogInfo?: IDialogInfo): string;
    setupDialog(dialogId: DialogId, highlightItemId?: number, customDialogInfo?: IDialogInfo): JQueryUI.DialogOptions;
    highlightItemElementByItemId(itemId: number, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemType(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementByItemTypeWithNoItemId(itemType: ItemType, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    highlightItemElementBySelector(selector: string, highlight: boolean, force?: boolean, skipCount?: boolean): void;
    getMovementDirection(mouseX: number, mouseY: number): Direction;
    blurInputs(): void;
    toggleDialog(dialog: JQuery): boolean;
    openDialog(dialog: JQuery): boolean;
    onOpenDialog(dialog: JQuery): void;
    focus(): void;
    closeDialog(dialog: JQuery): boolean;
    closeAllDialogs(): boolean;
    autoOpenDialog(index: string | number, element: JQuery): boolean;
    openDialogs(): void;
    clampDialogs(): void;
    getItemClass(item?: Item, itemType?: ItemType): string;
    createItemString(itemType: ItemType, item?: Item, extraClass?: string): string;
    syncItemElements(itemId?: number, selector?: JQuery): void;
    syncDamagedDecayed(item: Item, element: JQuery): void;
    addItemToContainer(item: Item, container: IContainer, internal?: boolean, isAddingMultipleItems?: boolean, updateTables?: boolean): void;
    insertItemStringToContainer(itemElement: string | JQuery, containerElement: JQuery): void;
    onAddItemsToContainer(containerElement: JQuery, containerDialogElement: JQuery | undefined, isInventoryContainer: boolean, updateTables?: boolean): void;
    afterAddingMultipleItemsToContainer(container: IContainer): void;
    removeItemFromContainer(item: Item, container: IContainer): void;
    refreshContainerName(container: IContainer): void;
    refreshQuickSlots(): void;
    getInventoryItemsInOrder(): any[];
    loadQuickSlots(): void;
    saveItemOrder(containerElement: JQuery): void;
    showItemContextMenu(element: JQuery, skipSound?: boolean): void;
    onContextMenuAction(element: JQuery, action: IContextMenuAction, toElement?: JQuery): boolean;
    runContextMenuAction(itemId: number, action: IContextMenuAction, skipSound?: boolean, usedFromQuickSlot?: boolean): boolean;
    craftItemChecker(itemType: ItemType): void;
    craftItem(item: ItemType, checker: ItemRecipeRequirementChecker): Promise<void>;
    onDismantleItemClick(dismantleItem: Item | undefined): void;
    getTooltipHtml(element: JQuery): string;
    tooltipEnable(): void;
    tooltipRefresh(): void;
    tooltipDisable(): void;
    tooltipHide(): void;
    unSelectElements(): void;
    getTooltipHtmlForItem(item: Item | undefined, itemType: ItemType, isQuickSlot: boolean, isDismantle: boolean, isNPC: boolean): string;
    getUsedQuickSlots(): number[];
    getFreeQuickSlots(): number[];
    getQuickSlotItemElement(quickSlot: number): JQuery;
    getItemIdInQuickSlot(quickSlot: number): number | undefined;
    setQuickSlot(quickSlot: number, itemId?: number, internal?: boolean): boolean;
    setQuickSlotByItemType(quickSlot: number, itemType: ItemType, disabled: boolean, item?: Item | undefined): void;
    addItemToFreeQuickSlot(itemId: number): void;
    clearQuickSlot(quickSlot: number, internal?: boolean): void;
    removeItemFromQuickSlot(itemId?: number, skipSync?: boolean): void;
    setItemQuickslot(item: Item, quickSlot: number | undefined): void;
    updateQuickSlotItem(quickSlot: number): boolean;
    onUpdateQuickSlotsOrEquips(): void;
    onSortableItemReceive(sortableEvent: ISortableEvent): void;
    getEquipSlotItemElement(equip: EquipType): JQuery;
    getItemIdInEquipSlot(equip: EquipType): number | undefined;
    setEquipSlot(equip: EquipType, itemId?: number, internal?: boolean): void;
    removeItemFromEquipSlot(equip: EquipType): void;
    sortSkills(skills: SkillType[]): SkillType[];
    updateCraftingDialog(craftableItemTypes: ItemType[], nonCraftableItemTypes: ItemType[]): void;
    updateDismantleTab(dismantleItems: IDismantleComponent): void;
    createCraftItemElements(containerSortInfo: IContainerSortInfo): void;
    updateItem(item: Item): void;
    onMove(): void;
    /**
     * Gets the dialog element for an item/doodad container (bags, backpacks, chests, etc.) and not inventories dialogs.
     * @param container The container to check.
     */
    getDialogElementFromContainer(container: IContainer): JQuery | undefined;
    /**
     * Gets the dialog container element for an inventory or item/doodad container.
     * @param container The container to check.
     */
    getDialogContainerElementForFilter(container: IContainer): JQuery | undefined;
    isContainerOpen(container: IContainer): boolean;
    openContainer(container: IContainer, containerName?: string): void;
    closeContainer(container: IContainer): void;
    closeContainerDialog(containerDialog?: JQuery): void;
    closeStaticContainers(): void;
    closeAllContainers(): boolean;
    updateContainerName(containerDialogElement: JQuery): void;
    updateActiveContainer(): void;
    hideContextMenu(): boolean;
    hideActionsMenu(): void;
    toggleActionsMenu(center?: boolean): void;
    showActionsMenu(center?: boolean, updatePosition?: boolean, skipSound?: boolean): void;
    getFilterText(containerElement: JQuery | undefined): any;
    getFilterElement(containerElement: JQuery): JQuery;
    onFilterInput(containerElement: JQuery): void;
    showSortContextMenu(element: JQuery, container: JQuery, messageType: Message): void;
    getContainerId(containerElement: JQuery): string;
    sortItems(containerElement: JQuery, sortType: SortType, messageType?: Message, canReverse?: boolean): void;
    sortItemElements(itemElements: JQuery, containerSortInfo: IContainerSortInfo): void;
    updateInventorySort(): void;
    onUpdateContainer(containerElement: JQuery, activeSort: boolean): void;
    updateSort(containerElement: JQuery, activeSort: boolean): void;
    isContainerDialogOver(x: number, y: number): boolean;
    onUpdateDirection(): void;
    onItemMenu(api: IBindHandlerApi): boolean;
    onItemQuickMove(api: IBindHandlerApi): boolean;
    onStopItemQuickMove(): boolean;
    onItemMove(api: IBindHandlerApi): boolean;
    onStopItemMove(api: IBindHandlerApi): void;
    onItemEquipToggle(api: IBindHandlerApi): boolean;
    onContextMenu(api: IBindHandlerApi): boolean;
    onContextMenuReleased(api: IBindHandlerApi): void;
    onQuickSlotToggle(api: IBindHandlerApi): boolean;
    onQuickSlot(api: IBindHandlerApi): boolean;
    onQuickSlotClear(api: IBindHandlerApi): boolean;
    onDropItem(api: IBindHandlerApi): boolean;
    onReleaseDrop(): void;
    onMenuCancel(): boolean;
    onCloseAllDialogs(): boolean;
    onMoreInformation(): boolean;
    onDismantleTab(): boolean;
    onHandToggle(api: IBindHandlerApi): boolean;
    onInput(api: IBindHandlerApi): void;
    private additionalRequirements;
    private runAction;
    private updateContextMenu;
    private confirmAction;
    private resetQuickSlotBinds;
    private isOverlayVisible;
    private readonly onInterrupt;
    private readonly onInterruptClosed;
    private getHoveredItem;
    /**
     * Get a number based on an item's legendary type/skill/stat in order.
     * @param item An item to sort.
     * @returns A number based on the legendary type/skill/stat.
     */
    private getLegendarySortOrder;
    private determineSort;
    private getBestSort;
}
