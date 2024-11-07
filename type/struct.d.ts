// struct.d.ts

/**
 * A class that represents a structure composed of multiple `Uint8Array` or `number` values.
 * The `Struct` class stores an array of `Uint8Array` members and concatenates them into a single `Uint8Array`.
 */
export class Struct extends Uint8Array {
    /**
     * Creates a new Struct instance from the given items.
     * @param items - Items to include in the structure. Each item can be either
     *                a `Uint8Array` or a `number` (which will be converted to `Uint8Array`).
     * @returns A new Struct instance.
     */
    static createFrom(...items: (Uint8Array | number)[]): Struct;

    /**
     * Alias for createFrom to create a new Struct instance.
     * @param items - Items to include in the structure.
     * @returns A new Struct instance.
     */
    static newStruct(...items: (Uint8Array | number)[]): Struct;

    /**
     * Creates a new Struct instance.
     * @param items - Items to include in the structure. Each item can be either
     *                a `Uint8Array` or a `number` (which will be converted to `Uint8Array`).
     * @throws {TypeError} If any argument is neither a `Uint8Array` nor a `number`.
     */
    constructor(...items: (Uint8Array | number)[]);

    /**
     * Returns the array of `Uint8Array` members in the structure.
     * @returns An array of the `Uint8Array` members.
     */
    get items(): Uint8Array[];
}