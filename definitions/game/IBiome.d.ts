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
import { IBiomeTemperature } from "game/temperature/ITemperature";
import { IBiomeMapGen, MapGenVersions } from "mapgen/IMapGen";
import { IModdable } from "mod/ModRegistry";
import { TerrainType } from "tile/ITerrain";
export interface IBiomeDescription extends IModdable {
    defaultTerrainBackground: TerrainType;
    temperature?: IBiomeTemperature;
    mapGen: MapGenVersions<IBiomeMapGen>;
}
export declare type BiomeMapGen = MapGenVersions<IBiomeMapGen>;
export declare type BiomeTypes = Exclude<BiomeType, BiomeType.Random>;
export declare enum BiomeType {
    Random = 0,
    Coastal = 1,
    IceCap = 2,
    Arid = 3
}
