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
import { Events, IEventEmitter } from "event/EventEmitter";
import InterruptChoice from "language/dictionary/InterruptChoice";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import Menu from "newui/screen/screens/menu/component/Menu";
import { InterruptOptions, InterruptType } from "newui/util/IInterrupt";
interface IInterruptMenuEvents extends Events<Menu> {
    resolve(choice?: InterruptChoice | string): any;
    cancel(triggerChoice?: boolean): any;
}
export default class InterruptMenu extends Menu {
    event: IEventEmitter<this, IInterruptMenuEvents>;
    private readonly interruptTitle;
    private readonly interruptDescription;
    private readonly input;
    private readonly choiceRow;
    private readonly loadingElement;
    private readonly customContentWrapper;
    private _type;
    private readonly settingOptionsQueue;
    private isResolved;
    get type(): InterruptType;
    constructor();
    setOptions(options: InterruptOptions): Promise<void>;
    initializeCustomContent(initializer?: (wrapper: Component) => any): this;
    setText(title?: TranslationGenerator, description?: TranslationGenerator): this;
    cancelInterrupt(): Promise<void>;
    choose(choice: InterruptChoice | string): Promise<void>;
    waitFor(): Promise<InterruptChoice | string | boolean | undefined>;
    protected onCancel(triggerChoose?: boolean): void;
    protected onEnter(): void;
    protected onHide(): any;
    protected onShow(): any;
}
export {};
