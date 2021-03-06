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
import { IMessage } from "entity/player/IMessageManager";
import Player from "entity/player/Player";
import { RequirementInstance } from "entity/player/quest/quest/Quest";
import { QuestInstance } from "entity/player/quest/QuestManager";
import { Events, IEventEmitter } from "event/EventEmitter";
import { IHookHost } from "mod/IHookHost";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { ContextMenuDescriptions } from "newui/component/ContextMenu";
import Input from "newui/component/Input";
import { Quadrant } from "newui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "newui/screen/screens/game/component/QuadrantComponent";
import { IPinnedMessage, MessageTimestamp, PinType } from "newui/screen/screens/game/IGameScreenApi";
import { IFilters, MessageFilterDefault } from "newui/screen/screens/game/IMessages";
import GameScreen from "newui/screen/screens/GameScreen";
interface IMessagesEvents extends Events<QuadrantComponent> {
    pinQuestRequirement(pin: IPinnedMessage): any;
    unpinQuestRequirement(pin: IPinnedMessage): any;
}
export default class Messages extends QuadrantComponent implements IHookHost {
    static sendChatMessage(sender: Player, message: string): typeof Messages;
    private static get defaultFilters();
    get preferredQuadrant(): Quadrant;
    static preferredQuadrant: Quadrant;
    event: IEventEmitter<this, IMessagesEvents>;
    readonly sendButton: Button;
    readonly pinnedMessages: Component;
    readonly log: Component;
    readonly input: Input;
    readonly filter: Button;
    pinNotesAutomatically: boolean;
    filters: IFilters;
    private selectedFilter;
    private showSendButton;
    private showOptionsButton;
    private messageTimestamps;
    private maxMessages;
    private readonly pinnedNotes;
    private readonly seenNotes;
    private readonly pinnedQuestRequirements;
    private readonly messagesToDisplay;
    private readonly chatSentHistory;
    private chatHistoryIndex;
    private pushedCurrentToHistory;
    constructor(host: GameScreen);
    getPins(): import("@wayward/goodstream/Stream").default<IPinnedMessage>;
    getMessageTimestampMode(): MessageTimestamp;
    setMessageTimestampMode(mode: MessageTimestamp): this;
    shouldShowSendButton(): boolean;
    setShouldShowSendButton(shouldShow: boolean): this;
    shouldShowOptionsButton(): boolean;
    setShouldShowOptionsButton(shouldShow: boolean): this;
    getMaxMessages(): number;
    setMaxMessages(maxMessages: number): this;
    scrollToNewest(): void;
    sendPinnedMessage(pinnedMessage: PinnedMessage): PinnedMessage;
    pinQuestRequirement(quest: QuestInstance, requirement?: RequirementInstance): IPinnedMessage | undefined;
    unpinMessage(pinnedMessage: PinnedMessage, time?: number): Promise<void>;
    onDisplayMessage(player: Player, message: IMessage, addBackwards?: boolean): void;
    onWrittenNote(player: Player, id: number): void;
    onFocusChat(): boolean;
    getDefaultFilterName(filter: MessageFilterDefault): string;
    protected onChangeQuadrant(): void;
    /**
     * Event handler for when the text in the chat box should be sent as a message.
     */
    protected sendMessage(): boolean;
    /**
     * Returns the context menu for messages, used by the superclass (quadrant component)
     */
    protected getContextMenuDescription(): ContextMenuDescriptions;
    private isInTopQuadrant;
    private isInDialog;
    private addPinnedNote;
    private addPinnedQuestRequirement;
    private onQuestGet;
    private onRequirementComplete;
    private pinRequirementsFromQuest;
    private hasIncompletePinnedRequirementFromAnotherQuest;
    private showOptions;
    private updateMessages;
    private messages;
    /**
     * Returns the basic context menu of messages, no matter what location it is in
     */
    private getMessagesContextMenu;
    /**
     * Runs a command that the user sent instead of sending it as a message.
     */
    private runCommand;
    /**
     * Returns `true` if the message should not be displayed.
     */
    private isMessageFilteredOut;
    /**
     * Event handler for when the filter button is clicked
     */
    private openFilterMenu;
    /**
     * Changes the message filter
     */
    private changeFilter;
    private refreshLog;
    private onShowDialog;
    private onShowNote;
    private editFilters;
    private onFiltersEdited;
    private onFiltersReset;
}
export declare class PinnedMessage extends Button {
    readonly type: PinType;
    readonly id: any;
    constructor(type: PinType, id: any);
}
export {};
