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
import Creature from "entity/creature/Creature";
import { Context, InfoProvider } from "game/inspection/InfoProvider";
import EntityInspection from "game/inspection/inspections/EntityInspection";
import { TranslationGenerator } from "newui/component/IComponent";
import { IVector3 } from "utilities/math/IVector";
export default class CreatureInspection extends EntityInspection<Creature> {
    static getFromTile(position: IVector3): never[] | CreatureInspection;
    constructor(creature: Creature);
    getId(): string;
    getBorder(): "var(--color-aberrant)" | "var(--color-tamed)" | undefined;
    get(context: Context): ArrayOr<InfoProvider | TranslationGenerator>;
    private getDescription;
}
