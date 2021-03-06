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
import ISpriteInfo from "renderer/ISpriteInfo";
import Vector2 from "utilities/math/Vector2";
export default class SpritePacker {
    private readonly gl;
    width: number;
    height: number;
    private readonly padding;
    private readonly packLargeToSmall;
    texture: WebGLTexture;
    inverseTextureSize: Vector2;
    private spriteLoadCount;
    private sprites;
    private readonly rootNode;
    private readonly loadedSprites;
    constructor(gl: WebGL2RenderingContext, width: number, height: number, nullSprite: boolean, padding: number, packLargeToSmall?: boolean);
    load(callback: () => void): Promise<void>;
    addSprite(src: string, callback: (si: ISpriteInfo, imageElement?: HTMLImageElement) => void): void;
    private loadSprite;
    private spriteLoaded;
    private checkFinished;
    private pack;
    private packSprite;
}
