// utils.d.ts

/**
 * Ensures that all provided items are Uint8Array instances or converts them from numbers.
 * @param items - The items to validate or convert.
 * @returns An array of Uint8Array instances.
 * @throws {TypeError} If an item is not a Uint8Array or number.
 * @throws {RangeError} If a number is not between 0 and 255.
 */
export function ensureUint8Array(...items: (Uint8Array | number)[]): Uint8Array[];

/**
 * Concatenates multiple Uint8Array instances into a single Uint8Array.
 * @param arrays - The arrays to concatenate.
 * @returns A new Uint8Array containing all the concatenated arrays.
 */
export function concatOctet(...arrays: Uint8Array[]): Uint8Array;

/**
 * Class representing a value converted to a Uint8Array.
 */
export class ValueToUint8Array extends Uint8Array {
    /**
     * Creates an instance of ValueToUint8Array.
     * @param max - The maximum value.
     * @param value - The value to convert.
     */
    constructor(max: number, value: number);

    /**
     * Converts a value to a Uint8Array.
     * @param value - The value to convert.
     */
    fromValue(value: number): void;

    /**
     * Creates a new ValueToUint8Array instance.
     * @param max - The maximum value.
     * @param value - The value to convert.
     * @returns A new instance.
     */
    static of(max: number, value: number): ValueToUint8Array;
}

/**
 * Converts a Uint8Array to a numeric value.
 * @param uint8array - The Uint8Array to convert.
 * @returns The numeric value.
 * @throws {TypeError} If the input is not a Uint8Array.
 * @throws {RangeError} If the Uint8Array length is greater than 4.
 */
export function uint8ArrayToValue(uint8array: Uint8Array): number;