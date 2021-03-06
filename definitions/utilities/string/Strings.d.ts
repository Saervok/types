/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki/types/wiki
 */
export declare enum CaseStyle {
    PascalCase = 0,
    CamelCase = 1,
    SnakeCase = 2,
    KebabCase = 3
}
export declare const matchLanguageLetters: RegExp;
export declare const matchNotLanguageLetters: RegExp;
export declare const matchInvalidPathLettersWindows: RegExp;
export declare const matchInvalidPathLettersUnix: RegExp;
declare module Strings {
    function parseMarkup(markupText: string): string;
    function capitalizeFirstLetter(str: string): string;
    function formatCase(str: string, caseStyle: CaseStyle): string;
    function caseFormatter(caseStyle: CaseStyle): (str: string) => string;
    function escapeHTML(str: string): string;
    function stripHTML(str: string): string;
    function stripParentDirectoryAccessorsFromPath(path: string): string;
    function encodeURIComponentPath(p: string): string;
    function generateTimestamp(date?: Date): string;
}
export default Strings;
