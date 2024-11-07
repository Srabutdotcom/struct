/**
 * A class that represents a constrained array with specified minimum and maximum length constraints.
 * Extends the `Uint8Array` class.
 */
export class Constrained extends Uint8Array {
    /**
     * Creates a new Constrained instance with specified MIN and MAX length constraints.
     * @param MIN - The minimum length for the data.
     * @param MAX - The maximum length for the data.
     * @param items - The items to include in the constrained array.
     * @throws {Error} If attempting to instantiate the abstract class directly.
     * @throws {TypeError} If MIN or MAX are not numbers.
     * @throws {RangeError} If MIN is negative or MAX is less than MIN.
     */
    constructor(MIN: number, MAX: number, ...items: any[]);

    /**
     * Gets the items included in the constrained array.
     * @returns The items in the constrained array.
     */
    get items(): any[];

    /**
     * Gets the minimum length constraint.
     * @returns The minimum length.
     */
    get MIN(): number;

    /**
     * Gets the maximum length constraint.
     * @returns The maximum length.
     */
    get MAX(): number;
} 