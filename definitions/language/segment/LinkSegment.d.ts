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
import { IColorSection } from "language/segment/ColorSegment";
import { IDecoratedSection } from "language/segment/TextDecorationSegments";
import { ISegment } from "utilities/string/Interpolator";
export declare type Link = string | [string, string | undefined];
export interface ILinkSection extends IColorSection, IDecoratedSection {
    link: Link;
}
declare const linkSegment: ISegment;
export default linkSegment;
