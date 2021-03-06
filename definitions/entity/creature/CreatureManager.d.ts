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
import { CreatureType, ICreatureDescription, SpawnGroup, TileGroup } from "entity/creature/ICreature";
import EntityManager from "entity/EntityManager";
import Human from "entity/Human";
import { MoveType } from "entity/IEntity";
import { Events, IEventEmitter } from "event/EventEmitter";
import Translation from "language/Translation";
import { ITile } from "tile/ITerrain";
import Vector3 from "utilities/math/Vector3";
import Player from "entity/player/Player";
export interface ICreatureManagerEvents extends Events<EntityManager<Creature>> {
    /**
     * Called when a creature is about to be spawned
     * @param type The type of creature
     * @param x The x coordinate where the creature will be spawned
     * @param y The y coordinate where the creature will be spawned
     * @param z The z coordinate where the creature will be spawned
     * @param aberrant True if the creature is an aberrant
     * @returns False if the creature cannot spawn, or undefined to use the default logic
     */
    canSpawn(type: CreatureType, x: number, y: number, z: number, aberrant: boolean): boolean | undefined;
}
export default class CreatureManager extends EntityManager<Creature> {
    readonly event: IEventEmitter<this, ICreatureManagerEvents>;
    getEntities(): SaferArray<Creature>;
    getName(creature: Creature | CreatureType, aberrant?: boolean, count?: number, article?: boolean): Translation;
    getHappinessLevel(human: Human, creature: Creature): number;
    /**
     * Spawns a creature.
     * @param creatureType The type of creature to spawn.
     * @param x The tile X position
     * @param y The tile Y position
     * @param z The tile Z position
     * @param bypass Whether to bypass checks for whether the creature can spawn there naturally. Defaults to false, if the creature can't spawn naturally, it won't.
     * @param forceAberrant If provided, forces the spawned creature's aberrant state to be the passed boolean. True = aberrant, false = not aberrant. If not provided, the aberrant state is decided based on chance.
     * @param spawnTiles If set, this will overwrite the creature's description for which tiles it can spawn on
     * @param bypassCreatureLimit If set, the creature limit will be ignored and spawn the creature over the set limit
     */
    spawn(creatureType: CreatureType, x: number, y: number, z: number, bypass?: boolean, forceAberrant?: boolean, spawnTiles?: TileGroup, bypassCreatureLimit?: boolean): Creature | undefined;
    spawnFromGroup(creatureGroup: SpawnGroup, x: number, y: number, z: number, bypass?: boolean, bypassCreatureLimit?: boolean): Creature | undefined;
    getSpawnableCreatures(creatureGroup: SpawnGroup, z: number, reputation?: number, time?: number): {
        pool: CreatureType[];
        aberrantChance: number;
    };
    exists(creature: Creature): boolean;
    maybeSpawnClawWorm(target: Human | Creature): void;
    remove(creature: Creature): void;
    updateAll(realPlayers: Player[]): void;
    /**
     * getMovePenalty
     * @return Blocked penalty - Do no return 0!
     */
    getMovePenalty(moveType: MoveType, tile: ITile, isFinalMove?: boolean): number;
    /**
     * wasm calls this when calculating penalties for flow fields
     */
    getMovePenaltyFromWasm(moveType: MoveType, x: number, y: number, z: number): number;
    checkSpawnReputation(creatureDescription: ICreatureDescription, reputation?: number, bypass?: boolean): boolean;
    getCreaturesWithSpawnGroup(group?: SpawnGroup, checkReputation?: boolean, reputation?: number): CreatureType[];
    spawnGuardians(position: Vector3, amount: number): number;
    private getReputationAberrantBonus;
}
