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
import EventEmitter from "event/EventEmitter";
import { TileUpdateType } from "game/IGame";
import IWorld from "renderer/IWorld";
import IWorldLayer from "renderer/IWorldLayer";
import ISerializer from "save/ISerializer";
import { ITile } from "tile/ITerrain";
export interface IWorldEvents {
    updateTile(x: number, y: number, z: number, tile: ITile, tileUpdateType: TileUpdateType): any;
}
export default class World extends EventEmitter.Host<IWorldEvents> implements IWorld {
    width: number;
    height: number;
    layers: IWorldLayer[];
    private loaded;
    constructor(width: number, height: number);
    delete(): void;
    toLocal(world: number, local: number): number;
    addLayer(level: number): void;
    load(): void;
    isLoaded(): boolean;
    updateAll(): void;
    setupExploredMap(): void;
    resetExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: ITile, tileUpdateType: TileUpdateType): void;
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
