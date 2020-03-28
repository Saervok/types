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
import Doodad from "doodad/Doodad";
import { Context } from "game/inspection2/InfoProvider";
import Inspection from "game/inspection2/Inspection";
import { IVector3 } from "utilities/math/IVector";
export default class DoodadInspection extends Inspection<Doodad> {
    static getFromTile(position: IVector3): never[] | DoodadInspection;
    constructor(doodad: Doodad);
    get(context: Context): never[];
    getId(): string;
}
