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
import { Action } from "entity/action/Action";
import { ActionArgument } from "entity/action/IAction";
export declare enum DropLocation {
    Facing = 0,
    Feet = 1,
    FeetWhenFacingBlocked = 2
}
declare const _default: Action<[ActionArgument.ItemNearby, [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.String, ActionArgument.Undefined]], import("../../player/Player").default | import("../../npc/NPC").default, void>;
export default _default;
