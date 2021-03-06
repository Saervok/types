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
import EventEmitter from "event/EventEmitter";
import { IObject } from "game/IObject";
import { ITemperatureSource } from "game/temperature/ITemperature";
import Translation, { ISerializedTranslation } from "language/Translation";
import { FireStage } from "tile/events/IFire";
import { ITile } from "tile/ITerrain";
import { ITileEventDescription, TileEventType } from "tile/ITileEvent";
import { IVector3 } from "utilities/math/IVector";
export interface ITileEventEvents {
    fireUpdate(stage?: FireStage): any;
}
export default class TileEvent extends EventEmitter.Host<ITileEventEvents> implements IObject<TileEventType>, IVector3, ITemperatureSource {
    static is(value: any): value is TileEvent;
    type: TileEventType;
    id: number;
    z: number;
    x: number;
    y: number;
    renamed?: string | ISerializedTranslation;
    decay?: number;
    fromX: number;
    fromY: number;
    gfx?: number;
    maxDur?: number;
    minDur?: number;
    spread?: number;
    step?: number;
    private _description;
    private _fireStage?;
    private _movementFinishTime?;
    constructor(type?: TileEventType, x?: number, y?: number, z?: number);
    description(): ITileEventDescription;
    getName(): Translation;
    getTile(): ITile;
    getProducedTemperature(): number | undefined;
    updateFire(): void;
    moveTo(x: number, y: number, z: number): void;
    addToTile(tile: ITile): void;
    removeFromTile(updateTile: boolean): void;
    getMovementProgress(timeStamp: number): number;
}
