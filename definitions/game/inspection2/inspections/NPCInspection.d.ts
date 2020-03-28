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
import NPC from "entity/npc/NPC";
import { Context } from "game/inspection2/InfoProvider";
import HumanInspection from "game/inspection2/inspections/HumanInspection";
import { IVector3 } from "utilities/math/IVector";
export default class NPCInspection extends HumanInspection<NPC> {
    static getFromTile(position: IVector3): never[] | NPCInspection;
    constructor(npc: NPC);
    get(context: Context): never[];
}
