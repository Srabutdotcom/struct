/**
 * Represents a TLS 1.3 `Struct` that can hold a sequence of `Uint8Array` or number values.
 */
export declare class Struct extends Uint8Array {
    /**
     * Creates an instance of `Struct`.
     * @param items - A variable number of arguments, each of which can be either a `Uint8Array` or a `number`.
     * @throws TypeError if any argument is not a `Uint8Array` or `number`.
     */
    constructor(...items: (Uint8Array | number)[]);
  
    /**
     * The internal representation of the struct members, stored as an array of `Uint8Array` instances.
     */
    readonly #member: Uint8Array[];
  
    /**
     * Returns an array of `Uint8Array` that represent the individual members of this struct.
     * @returns An array of `Uint8Array` instances.
     */
    get member(): Uint8Array[];
  
    /**
     * Concatenates multiple `Uint8Array` instances into a single `Uint8Array`.
     * @param items - An array of `Uint8Array` instances to concatenate.
     * @returns A single `Uint8Array` representing the concatenated result.
     */
    private static concat(...items: Uint8Array[]): Uint8Array;
  }
  