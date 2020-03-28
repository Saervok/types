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
import { InspectType } from "game/inspection2/IInspection";
import { Context } from "game/inspection2/InfoProvider";
import Inspection from "game/inspection2/Inspection";
import Translation from "language/Translation";
export default abstract class ListInspection<I extends Inspection<any>> extends Inspection<I[]> {
    constructor(inspectType: InspectType, ...inspections: I[]);
    get(context: Context): Translation;
    getId(): string;
    protected getInspectionTranslation(inspection: I, context: Context): Translation;
}
