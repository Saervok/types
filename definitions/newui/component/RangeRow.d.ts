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
import { Events, IEventEmitter } from "event/EventEmitter";
import Translation from "language/Translation";
import { BlockRow } from "newui/component/BlockRow";
import Button from "newui/component/Button";
import { IDisableable } from "newui/component/IComponent";
import { RangeInput } from "newui/component/RangeInput";
import { RangeInputValueDisplay } from "newui/component/RangeInputValueDisplay";
import { IRefreshable } from "newui/component/Refreshable";
import { Heading, Paragraph } from "newui/component/Text";
import { IStringSection } from "utilities/string/Interpolator";
export declare class RangeRow extends BlockRow implements IRefreshable, IDisableable {
    event: IEventEmitter<this, Events<RangeInput>>;
    rangeInput: RangeInput;
    heading: Heading;
    rangeInputValueDisplay: RangeInputValueDisplay | undefined;
    description: Paragraph;
    defaultButton?: Button;
    get value(): number;
    set value(val: number);
    private readonly _disabledReasons;
    get disabled(): boolean;
    constructor();
    setDisabled(val?: boolean, reason?: string): this;
    editRange(rangeInputInitializer: (rangeInput: RangeInput) => RangeInput): this;
    setLabel(label: (label: Heading) => Heading): this;
    setDisplayValue(display: boolean | ((val: number) => IStringSection[] | Translation)): this;
    addDefaultButton(defaultValue?: () => number): this;
    addDescription(initializer: (description: Paragraph) => any): this;
    refresh(): this;
    private updateDisplay;
}
