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
import { TypedPropertyDescriptorFunctionAnyNOfParams } from "event/EventManager";
import Bindable from "newui/input/Bindable";
import { IBinding } from "newui/input/IBinding";
import { BindingInfo, InputInfo, MouseInfo } from "newui/input/InputManager";
export interface IBindHandlerApi {
    /**
     * The bindable this handler is called for.
     */
    bindable: Bindable | "anything";
    /**
     * The type of input event.
     * - `"down"` — When the bindable is pressed.
     * - `"up"` — When the bindable is released.
     * - `"holding"` — Every frame while the bindable is held.
     */
    event: BindingEventName;
    /**
     * Details on the catalyst of this event.
     */
    catalyst: BindingInfo;
    /**
     * Details on where the mouse is.
     */
    mouse: MouseInfo;
    /**
     * Details on the status of all input.
     */
    input: InputInfo;
    /**
     * A set containing all `Bindable`s that:
     * 1. Matched the currently pressed keys.
     * 2. Were handled with a `@Binding` event handler that returned `true`.
     * Note: Only contains `Bindable`s of which the handlers have already been processed.
     */
    caught: Set<Bindable>;
}
declare type BindingHandler<R = boolean> = (api: IBindHandlerApi) => R;
interface IBindHandlerRegistration<T extends {
    [K in P]: BindingHandler;
}, P extends string | number | symbol> {
    bindable: Bindable | "anything";
    event: BindingEvent;
    priority: number;
    always: boolean;
    handlerProperty: P;
    instances: Set<T>;
}
declare enum BindingEvent {
    down = 0,
    up = 1,
    holding = 2
}
declare type BindingEventName = keyof typeof BindingEvent;
export { BindingEventName as BindingEvent };
declare module Bind {
    /**
     * Registers a handler for when the given `Bindable` is pressed. This event won't be fired again until the `Bindable` was then *released*.
     *
     * Your decorated method should return whether or not the bindable was *actually* activated. (For example, if the mouse was in the right
     * spot and the action can currently be executed.) If you return `true`, *no other* `@Bind.onDown` handlers will be run. If you return
     * `false`, other matching `@Bind.onDown` handlers *will* be run.
     *
     * @param bindable The `Bindable`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onDown(bindable: Bindable, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler>) => void;
    /**
     * Registers a handler for when anything is pressed.
     * @param bindable Must be the string `"anything"`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onDown(bindable: "anything", priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for when anything is pressed. This handler will *always* be executed, even if other handlers also matched the catalyst.
     * @param bindable The `Bindable`, or the string `"anything"` (to handle when *anything* is pressed).
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     * @param always Must be `true`.
     */
    function onDown(bindable: Bindable | "anything", priority: number | undefined, always: true): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for when the given `Bindable` is released.
     * @param bindable The `Bindable`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onUp(bindable: Bindable | "anything", priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for every frame in which the given `Bindable` is held down.
     *
     * Your decorated method should return whether or not the bindable is *actually* held. (For example, if the mouse was in the right
     * spot and the action can currently be executed.) If you return `true`, *no other* `@Bind.onHolding` handlers will be run. If you
     * return `false`, other matching `@Bind.onHolding` handlers *will* be run.
     *
     * @param bindable The `Bindable`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onHolding(bindable: Bindable, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler>) => void;
    /**
     * Registers a handler for every frame in which anything is held down.
     * @param bindable Must be the string `"anything"`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onHolding(bindable: "anything", priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for every frame in which anything is held down. This handler will *always* be executed, even if other handlers also matched the catalyst.
     * @param bindable The `Bindable`, or the string `"anything"` (to handle when *anything* is held).
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     * @param always Must be `true`.
     */
    function onHolding(bindable: Bindable | "anything", priority: number | undefined, always: true): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    function addHandler(bindable: Bindable, event: BindingEventName, handler: BindingHandler, priority?: number): void;
    function addHandler(bindable: "anything", event: BindingEventName, handler: BindingHandler<void>, priority?: number): void;
    function addHandler(bindable: Bindable | "anything", event: BindingEventName, handler: BindingHandler<void>, priority: number | undefined, always: true): void;
    function addHandler<T extends {
        [key in K]: BindingHandler;
    }, K extends keyof T>(bindable: Bindable, event: BindingEventName, obj: T, key: K, priority?: number): void;
    function addHandler<T extends {
        [key in K]: BindingHandler<void>;
    }, K extends keyof T>(bindable: "anything", event: BindingEventName, obj: T, key: K, priority?: number): void;
    function addHandler<T extends {
        [key in K]: BindingHandler<void>;
    }, K extends keyof T>(bindable: Bindable | "anything", event: BindingEventName, obj: T, key: K, priority: number | undefined, always: true): void;
    function removeHandler(bindable: Bindable, event: BindingEventName, handler: BindingHandler, priority?: number): void;
    function removeHandler(bindable: "anything", event: BindingEventName, handler: BindingHandler<void>, priority?: number): void;
    function removeHandler(bindable: Bindable | "anything", event: BindingEventName, handler: BindingHandler<void>, priority: number | undefined, always: true): void;
    function removeHandler<T extends {
        [key in K]: BindingHandler;
    }, K extends keyof T>(bindable: Bindable, event: BindingEventName, obj: T, key: K, priority?: number): void;
    function removeHandler<T extends {
        [key in K]: BindingHandler<void>;
    }, K extends keyof T>(bindable: "anything", event: BindingEventName, obj: T, key: K, priority?: number): void;
    function removeHandler<T extends {
        [key in K]: BindingHandler<void>;
    }, K extends keyof T>(bindable: Bindable | "anything", event: BindingEventName, obj: T, key: K, priority: number | undefined, always: true): void;
    type HandlerRegistrationGeneric = IBindHandlerRegistration<{
        [K in string | number]: BindingHandler;
    }, string | number>;
    /**
     * Registers bind handlers for the given class instance. (Bind handlers are methods decorated with `@Bind.onDown`, `@Bind.onHolding`, `@Bind.onUp`)
     */
    function registerHandlers(host: any): void;
    /**
     * Deregisters any registered bind handlers for the given class instance. (Bind handlers are methods decorated with `@Bind.onDown`, `@Bind.onHolding`, `@Bind.onUp`)
     */
    function deregisterHandlers(host: any): void;
    let shouldLogHoldingEvent: boolean;
    function emitEvent(event: BindingEventName, binding: IBinding, info: BindingInfo, mouse: MouseInfo, input: InputInfo): Set<Bindable>;
}
export default Bind;