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
import { BookType } from "item/IItem";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import Dialog from "newui/screen/screens/game/component/Dialog";
export default class BookDialog extends Dialog {
    private book?;
    private readonly text;
    constructor();
    getName(): Translation | UiTranslation.GameDialogBookName;
    setBook(book: BookType): void;
    private getText;
}
