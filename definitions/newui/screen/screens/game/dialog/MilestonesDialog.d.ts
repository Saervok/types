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
import { Milestone } from "game/milestones/IMilestone";
import UiTranslation from "language/dictionary/UiTranslation";
import Dialog from "newui/screen/screens/game/component/Dialog";
export default class MilestonesDialog extends Dialog {
    private readonly milestones;
    private readonly sortRow;
    constructor();
    getName(): UiTranslation;
    onMilestoneUpdate(_: any, milestone: Milestone): void;
    private sort;
    private sortMilestones;
    private filter;
    private getFilterString;
    private getTooltip;
    private getMilestoneReadout;
    private visibility;
}
