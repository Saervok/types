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
import { HairStyle, ICharacter, IColorDescription, ICustomizations, IHairstyleDescription } from "entity/IHuman";
export declare const hairstyleDescriptions: OptionalDescriptions<HairStyle, IHairstyleDescription>;
export declare const hairColorDescriptions: {
    [index: number]: IColorDescription | undefined;
};
export declare const skinColorDescriptions: {
    [index: number]: IColorDescription | undefined;
};
export declare function generateRandomCustomization(): ICustomizations;
export declare function generateRandomCharacter(): ICharacter;
export declare enum ColorType {
    Hair = "hairColor",
    Skin = "skinColor"
}
export declare function getColorDescription(type: ColorType, color: string): IColorDescription;
