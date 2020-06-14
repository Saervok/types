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
import DoodadInfo from "doodad/DoodadInfo";
import { DoodadType } from "doodad/IDoodad";
import { IWorldLayer, TerrainMask } from "renderer/IWorldLayer";
import IWorldRenderer, { RenderLayerFlag } from "renderer/IWorldRenderer";
import EventEmitter from "event/EventEmitter";
export interface IWorldLayerRendererEvents {
    /**
     * Called when rendering the world
     * @returns Flags indicating what layers to render
     */
    getRenderFlags(): RenderLayerFlag;
}
export default class WorldLayerRenderer extends EventEmitter.Host<IWorldLayerRendererEvents> {
    private readonly gl;
    protected renderer: IWorldRenderer;
    private readonly worldLayer;
    width: number;
    height: number;
    texLightBlock: WebGLTexture;
    texLightLevel: WebGLTexture;
    texExplored: WebGLTexture;
    private dirty;
    private readonly terrainLayer;
    private readonly terrainOverLayer;
    private readonly terrainDecorationsLayer;
    private readonly doodadLayer;
    private readonly doodadOverLayer;
    constructor(gl: WebGL2RenderingContext, renderer: IWorldRenderer, worldLayer: IWorldLayer, width: number, height: number, positionBuffer: WebGLBuffer);
    updateAll(): void;
    setDoodad(x: number, y: number, doodad: DoodadType | undefined, doodadInfo: DoodadInfo | undefined, variationX: number, variationY: number, hasGraphicVariation: boolean, terrainMasks: TerrainMask, flushImmediate?: boolean): void;
    renderFullbright(x: number, y: number, tileScale: number, viewWidth: number, viewHeight: number, renderFixedDepth: boolean): void;
    private computeTile;
    private computeDoodad;
    private computeTilled;
    private computeDecorations;
    private setLayer;
    private setForegroundLayer;
    private setBackgroundLayer;
    private setBackgroundToForegroundLayer;
    private clearLayer;
    private clearForegroundLayer;
    private clearBackgroundLayer;
    private updateTileLightBlock;
    private flush;
}
