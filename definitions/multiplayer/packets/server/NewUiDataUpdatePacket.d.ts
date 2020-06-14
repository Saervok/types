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
import Player from "entity/player/Player";
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class NewUiDataUpdatePacket extends PlayerTargetedServerPacket {
    static create(player: Player, hostId: string | number, updates: {
        [key: string]: any;
    }): NewUiDataUpdatePacket;
    hostId: string | number;
    updates: any;
    process(): void;
}
