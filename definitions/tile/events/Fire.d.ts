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
import { ILootItem } from "game/ILoot";
import { Quality } from "game/IObject";
import { IContainer, ItemType } from "item/IItem";
import Item from "item/Item";
import { ITileContainer } from "tile/ITerrain";
import { ITileEvent, ITileEventDescription } from "tile/ITileEvent";
declare const fire: ITileEventDescription;
export default fire;
export declare function dissassemblyBurn(item: Item, container: ITileContainer, disassembly: boolean): void;
export declare function harvestGatherBurn(step: number, resources: ILootItem[] | undefined, container: IContainer, quality: Quality | undefined, tileEvent: ITileEvent): void;
export declare function burnsLike(burnsLikeItem: ItemType, tileEvent: ITileEvent, tileContainer: IContainer, quality: Quality): void;
