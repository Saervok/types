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
import { IModInfo } from "mod/IModInfo";
import { CheckButton } from "newui/component/CheckButton";
interface IModRowEvents extends Events<CheckButton> {
    shouldRefreshMenu(): any;
}
export default class ModRow extends CheckButton {
    readonly index: number;
    readonly info: IModInfo;
    event: IEventEmitter<this, IModRowEvents>;
    private buttonOptions;
    private buttonView;
    private buttonPublish;
    constructor(index: number, info: IModInfo);
    updateButtons(): void;
    setEnabled(enabled: boolean, prompts?: boolean): Promise<boolean>;
    protected onToggle(checked: boolean): Promise<void>;
    private checkDependants;
    private checkDependencies;
    private tryEnableDependencies;
    private canPublish;
    private getDependencyNames;
    private onDelete;
    private onPublish;
    private getTooltip;
    private isLoadable;
}
export {};
