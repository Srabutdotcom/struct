/**
 * A class that extends Uint8Array and provides utility methods for safe manipulation of byte arrays.
 */
export class SafeUint8Array extends Uint8Array {
   /**
    * Constructs a SafeUint8Array from a series of Uint8Array instances or individual byte values.
    * @param items - An array of Uint8Array instances or byte values (0-255).
    */
   constructor(...items: (Uint8Array | number)[]);

   /**
    * Creates a new SafeUint8Array instance from a series of Uint8Array instances or byte values.
    * @param items - An array of Uint8Array instances or byte values (0-255).
    * @returns A new SafeUint8Array instance.
    */
   static fromItems(...items: (Uint8Array | number)[]): SafeUint8Array;

   /**
    * Concatenates the current SafeUint8Array with additional Uint8Array instances or byte values.
    * @param items - An array of Uint8Array instances or byte values (0-255).
    * @returns A new SafeUint8Array instance containing the concatenated values.
    */
   concat(...items: (Uint8Array | number)[]): SafeUint8Array;
}

/**
 * Utility function to create a new Uint8Array from a series of Uint8Array instances or byte values.
 * @param ar - An array of Uint8Array instances or byte values (0-255).
 * @returns A new Uint8Array containing the concatenated values.
 */
export function safeuint8array(...ar: (Uint8Array | number)[]): Uint8Array;

/**
 * Checks if a value is a valid byte (integer between 0 and 255).
 * @param v - The value to check.
 * @returns `true` if the value is a valid byte, otherwise `false`.
 */
export function isByte(v: any): boolean;
