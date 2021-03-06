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
import { TileGroup } from "entity/creature/ICreature";
import { IOverlayInfo, ITile, TerrainType } from "tile/ITerrain";
import { IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
declare module TileHelpers {
    const maskGfx = 31;
    const maskType = 4064;
    const maskTilled = 4096;
    const maskDoodadOverHidden = 8192;
    const maskDoodadAnimationDisabled = 16384;
    function getGfx(tile: ITile): number;
    function getGfxRaw(data: number): number;
    function setGfx(tile: ITile, value: number): void;
    function setGfxRaw(data: number, value: number): number;
    function getType(tile: ITile): TerrainType;
    function getTypeRaw(data: number): TerrainType;
    function setType(tile: ITile, value: TerrainType): void;
    function setTypeRaw(data: number, value: TerrainType): number;
    function isTilled(tile: ITile): boolean;
    function isTilledRaw(data: number): boolean;
    function setTilled(tile: ITile, value: boolean): void;
    function setTilledRaw(data: number, value: number): number;
    function isDoodadOverHidden(tile: ITile): boolean;
    function isDoodadOverHiddenRaw(data: number): boolean;
    function setDoodadOverHidden(tile: ITile, value: boolean): void;
    function setDoodadOverHiddenRaw(data: number, value: number): number;
    function isDoodadAnimationDisabled(tile: ITile): boolean;
    function isDoodadAnimationDisabledRaw(data: number): boolean;
    function setDoodadAnimationDisabled(tile: ITile, value: boolean): void;
    function setDoodadAnimationDisabledRaw(data: number, value: number): number;
    function getTileVariation(x: number, y: number): number;
    function isTypeInGroup(tile: ITile | TerrainType, group: TileGroup): boolean;
    function atlas(tile: ITile): {
        isMountain: boolean;
        isOre: boolean;
        isLava: boolean;
        isWater: boolean;
        isFloor: boolean;
    };
    module Overlay {
        function add(tile: ITile, overlay: IOverlayInfo, ifNotExist?: (overlay: IOverlayInfo) => boolean): boolean;
        function has(tile: ITile, filter: (overlay: IOverlayInfo) => boolean): boolean;
        function remove(tile: ITile, overlay: IOverlayInfo): boolean;
        function remove(tile: ITile, filter: (overlay: IOverlayInfo) => boolean): boolean;
    }
    function findMatchingTile(start: IVector3, isMatchingTile?: (point: IVector3, tile: ITile) => boolean, maxTilesChecked?: number, canVisitTile?: (point: IVector3, tile: ITile) => boolean): IVector3 | undefined;
    /**
     * Check is a tile is open
     */
    function isOpenTile(point: IVector3, tile?: ITile): boolean;
    /**
     * Check if a tile is a suitable spawn point
     */
    function isSuitableSpawnPointTile(point: IVector3, tile: ITile): boolean;
    /**
     * Check if a tile is a suitable spawn point
     */
    function isSuitableSpawnPointTileForMultiplayer(point: IVector3, tile: ITile): boolean;
    function getSuitableSpawnPoint(): IVector3;
    function getPointsAround(point: IVector3, includeCurrentTile?: boolean, includeCorners?: boolean): IVector3[];
    /**
     * Array version of TileHelpers.tilesAround
     */
    function getTilesAround(point: IVector3, includeCurrentTile?: boolean, includeCorners?: boolean): ITile[];
    /**
     * IterableIterator version of TileHelpers.getTilesAround
     */
    function tilesAround(point: IVector3, includeCurrentTile?: boolean, includeCorners?: boolean): Generator<ITile, void, unknown>;
    function tilesInRange(point: IVector3, range: number, includeCurrentTile?: boolean): import("@wayward/goodstream/Stream").default<[Vector3, ITile]>;
    function openTileInRange(point: IVector3, range: number, includeCurrentTile?: boolean): [Vector3, ITile] | undefined;
    function forTilesInRange(point: IVector3, range: number, consumer: (vec: IVector3, tileValue: number) => any): void;
    function forTilesInRange(point: IVector3, range: number, includeCenter: true, consumer: (vec: IVector3, tileValue: number) => any): void;
    /**
     * Check if the tile is blocked (impassable terrain or doodads that cause blocked movement).
     */
    function isTileBlocked(point: IVector3): boolean;
}
export default TileHelpers;
