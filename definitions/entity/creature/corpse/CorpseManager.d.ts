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
import { ICorpse } from "entity/creature/corpse/ICorpse";
import { CreatureType } from "entity/creature/ICreature";
import EventEmitter from "event/EventEmitter";
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
import { ItemType } from "item/IItem";
import Translation, { TextContext } from "language/Translation";
export interface ICorpseManagerEvents {
    create(corpse: ICorpse): any;
    remove(corpse: ICorpse): any;
}
export default class CorpseManager extends EventEmitter.Host<ICorpseManagerEvents> {
    create(type: CreatureType, x: number, y: number, z: number, decay?: number, aberrant?: boolean, name?: string, qualityBonus?: number): ICorpse | undefined;
    updateAll(): void;
    getResources(corpse: ICorpse, clientSide?: boolean): ItemType[];
    remove(corpse: ICorpse): void;
    getName(typeOrCorpse: CreatureType | ICorpse, article?: boolean, count?: number, showCount?: boolean): Translation;
    getCorpseTranslations(corpses: ICorpse[], article?: boolean, context?: TextContext): import("@wayward/goodstream/Stream").default<Translation>;
    getCorpseListTranslation(corpses: ICorpse[], article?: boolean, context?: TextContext): Translation;
    inspect({ context }: Inspection, ...corpses: ICorpse[]): InspectionResult;
    is(thing: any): thing is ICorpse;
}
