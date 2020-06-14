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
import Component from "newui/component/Component";
import { IComponent } from "newui/component/IComponent";
import { ITooltipManager } from "newui/INewUi";
import Tooltip from "newui/tooltip/Tooltip";
export default class TooltipManager implements ITooltipManager {
    readonly tooltipWrapper: Component;
    private host;
    private tooltip;
    private readonly disablers;
    constructor();
    show(host: IComponent, force?: boolean): Tooltip | undefined;
    hide(host?: Component | undefined, forceRemove?: boolean): void;
    /**
     * Disables tooltips.
     * Note: Multiple things can cause tooltips to be disabled simultaneously; tooltips won't be re-enabled until every
     * disabler has been removed via `enable(disabler)`.
     */
    disable(disabler: any): this;
    /**
     * Removes the given tooltip disabler.
     * Note: Multiple things can cause tooltips to be disabled simultaneously; tooltips won't be re-enabled until *every*
     * disabler has been removed.
     */
    enable(disabler: any): this;
    protected onScreenResize(): void;
    private loop;
}
