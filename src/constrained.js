// @ts-self-types="../type/constrained.d.ts"

import { ValueToUint8Array } from "./utils.js";
import { safeuint8array } from "./safeuint8array.js"

/**
 * A class that represents a constrained array with specified minimum and maximum length constraints.
 * Extends the `Uint8Array` class.
 */
export class Constrained extends Uint8Array {
    /** @type {number} */
    #_MIN;
    /** @type {number} */
    #_MAX;
    /** @type {any[]} */
    #items;

    /**
     * Creates a new Constrained instance with specified MIN and MAX length constraints.
     * @param {number} MIN - The minimum length for the data.
     * @param {number} MAX - The maximum length for the data.
     * @param {...any} items - The items to include in the constrained array.
     * @throws {Error} If attempting to instantiate the abstract class directly.
     * @throws {TypeError} If MIN or MAX are not numbers.
     * @throws {RangeError} If MIN is negative or MAX is less than MIN.
     */
    constructor(MIN, MAX, ...items) {
        if (new.target === Constrained) {
            throw new Error("Cannot instantiate abstract class Constrained directly.");
        }

        if (typeof MIN !== 'number' || typeof MAX !== 'number') {
            throw new TypeError("MIN and MAX must be numbers.");
        }

        if (MIN < 0) {
            throw new RangeError("MIN length cannot be negative.");
        }

        if (MAX < MIN) {
            throw new RangeError("MAX length cannot be less than MIN length.");
        }

        const concatItems = safeuint8array(...items);
        if (concatItems.length < MIN) {
            throw new RangeError("Total items length cannot be less than MIN length.");
        }
        const lengthOfConcatItems = ValueToUint8Array.of(MAX, concatItems.length);

        super(safeuint8array(lengthOfConcatItems, concatItems));
        this.#_MIN = MIN;
        this.#_MAX = MAX;
        this.#items = items;
    }

    /**
     * Gets the items included in the constrained array.
     * @returns {any[]} The items in the constrained array.
     */
    get items() {
        return this.#items;
    }

    /**
     * Gets the minimum length constraint.
     * @returns {number} The minimum length.
     */
    get MIN() {
        return this.#_MIN;
    }

    /**
     * Gets the maximum length constraint.
     * @returns {number} The maximum length.
     */
    get MAX() {
        return this.#_MAX;
    }
}

export function parseItems(uint8array, start, lengthOf, object, parser) {
    const items = new Set;
    let offset = start;
    while (true) {
        const item = object.from(uint8array.subarray(offset)); offset += item.length;
        if (parser) parser(item);
        items.add(item);
        if (offset >= lengthOf + start) break;
    }
    return items
}