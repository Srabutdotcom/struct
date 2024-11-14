/**
 * Represents an 8-bit unsigned integer as a Uint8Array.
 */
export class Uint8 extends Uint8Array {
   /**
    * Creates a new Uint8 instance from a given 8-bit unsigned integer value.
    * @param {number} uint8 - The 8-bit unsigned integer.
    * @returns {Uint8} A new Uint8 instance.
    */
   static fromValue(uint8: number): Uint8;

   /**
    * Gets the 8-bit unsigned integer value represented by this instance.
    * @returns {number} The integer value.
    */
   get value(): number;
}

/**
 * Represents a 16-bit unsigned integer as a Uint8Array.
 */
export class Uint16 extends Uint8Array {
   /**
    * Creates a new Uint16 instance from a given 16-bit unsigned integer value.
    * @param {number} uint16 - The 16-bit unsigned integer.
    * @returns {Uint16} A new Uint16 instance.
    */
   static fromValue(uint16: number): Uint16;

   /**
    * Gets the 16-bit unsigned integer value represented by this instance.
    * @returns {number} The integer value.
    */
   get value(): number;
}

/**
 * Represents a 24-bit unsigned integer as a Uint8Array.
 */
export class Uint24 extends Uint8Array {
   /**
    * Creates a new Uint24 instance from a given 24-bit unsigned integer value.
    * @param {number} uint24 - The 24-bit unsigned integer.
    * @returns {Uint24} A new Uint24 instance.
    */
   static fromValue(uint24: number): Uint24;

   /**
    * Gets the 24-bit unsigned integer value represented by this instance.
    * @returns {number} The integer value.
    */
   get value(): number;
}

/**
 * Represents a 32-bit unsigned integer as a Uint8Array.
 */
export class Uint32 extends Uint8Array {
   /**
    * Creates a new Uint32 instance from a given 32-bit unsigned integer value.
    * @param {number} uint32 - The 32-bit unsigned integer.
    * @returns {Uint32} A new Uint32 instance.
    */
   static fromValue(uint32: number): Uint32;

   /**
    * Gets the 32-bit unsigned integer value represented by this instance.
    * @returns {number} The integer value.
    */
   get value(): number;
}
