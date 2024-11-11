/**
 * Class representing a Byte, extending Uint8Array.
 */
export declare class Byte extends Uint8Array {
    /**
     * Creates a Byte instance from an array.
     * @param array - The array of numbers to create the Byte instance.
     * @returns The created Byte instance.
     */
    static from(array: number[]): Byte;

    /**
     * Creates a Byte instance from a numeric value.
     * @param value - The numeric value to convert to a Byte instance.
     * @returns The created Byte instance.
     */
    static fromValue(value: number): Byte;

    /**
     * Creates a Byte instance.
     * @param array - The array of numbers to initialize the Byte instance.
     */
    constructor(array: number[]);

    /**
     * Gets the numeric value represented by the Byte instance.
     * @returns The numeric value.
     */
    get value(): number;
} 