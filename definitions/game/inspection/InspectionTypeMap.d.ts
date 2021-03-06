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
import { InspectType } from "game/inspection/IInspection";
import { Context } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import CorpseInspection from "game/inspection/inspections/CorpseInspection";
import CorpsesInspection from "game/inspection/inspections/CorpsesInspection";
import CreatureInspection from "game/inspection/inspections/CreatureInspection";
import DoodadInspection from "game/inspection/inspections/DoodadInspection";
import ItemInspection from "game/inspection/inspections/ItemInspection";
import ItemsInspection from "game/inspection/inspections/ItemsInspection";
import NPCInspection from "game/inspection/inspections/NPCInspection";
import PlayerInspection from "game/inspection/inspections/PlayerInspection";
import SelfInspection from "game/inspection/inspections/SelfInspection";
import TileEventInspection from "game/inspection/inspections/TileEventInspection";
import TileInspection from "game/inspection/inspections/TileInspection";
import { IVector3 } from "utilities/math/IVector";
export declare type InspectionClass = Class<Inspection<any>> & {
    getFromTile(position: IVector3, context: Context, inspectType: InspectType): ArrayOr<Inspection<any>>;
};
declare const _default: {
    9: typeof CorpseInspection;
    10: typeof CorpsesInspection;
    3: typeof CreatureInspection;
    4: typeof DoodadInspection;
    6: typeof PlayerInspection;
    7: typeof ItemInspection;
    8: typeof ItemsInspection;
    2: typeof NPCInspection;
    1: typeof PlayerInspection;
    0: typeof SelfInspection;
    12: typeof TileInspection;
    5: typeof TileEventInspection;
    11: typeof TileEventInspection.Minor;
} & Record<InspectType, InspectionClass>;
export default _default;
