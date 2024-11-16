/**
 * Represents an 8-bit unsigned integer as a Uint8Array.
 */
export declare class Uint8 extends Uint8Array {
   /**
    * Constructs a Uint8 from an array.
    * @param {Uint8Array | number[]} array - The underlying array data.
    */
   constructor(array: Uint8Array | number[]);

   /**
    * Creates a Uint8 from a given array.
    * @param {Uint8Array | number[]} array - The source array.
    * @returns {Uint8} A new Uint8 instance.
    */
   static from(array: Uint8Array | number[]): Uint8;

   /**
    * Creates a Uint8 from a value.
    * @param {number} uint8 - An 8-bit unsigned integer (0-255).
    * @returns {Uint8} A new Uint8 instance.
    */
   static fromValue(uint8: number): Uint8;

   /**
    * The numeric value of the Uint8.
    * @type {number}
    */
   get value(): number;
}

/**
 * Represents a 16-bit unsigned integer as a Uint8Array.
 */
export declare class Uint16 extends Uint8Array {
   /**
    * Constructs a Uint16 from an array.
    * @param {Uint8Array | number[]} array - The underlying array data.
    */
   constructor(array: Uint8Array | number[]);

   /**
    * Creates a Uint16 from a given array.
    * @param {Uint8Array | number[]} array - The source array.
    * @returns {Uint16} A new Uint16 instance.
    */
   static from(array: Uint8Array | number[]): Uint16;

   /**
    * Creates a Uint16 from a value.
    * @param {number} uint16 - A 16-bit unsigned integer (0-65535).
    * @returns {Uint16} A new Uint16 instance.
    */
   static fromValue(uint16: number): Uint16;

   /**
    * The numeric value of the Uint16.
    * @type {number}
    */
   get value(): number;
}

/**
 * Represents a 24-bit unsigned integer as a Uint8Array.
 */
export declare class Uint24 extends Uint8Array {
   /**
    * Constructs a Uint24 from an array.
    * @param {Uint8Array | number[]} array - The underlying array data.
    */
   constructor(array: Uint8Array | number[]);

   /**
    * Creates a Uint24 from a given array.
    * @param {Uint8Array | number[]} array - The source array.
    * @returns {Uint24} A new Uint24 instance.
    */
   static from(array: Uint8Array | number[]): Uint24;

   /**
    * Creates a Uint24 from a value.
    * @param {number} uint24 - A 24-bit unsigned integer (0-16777215).
    * @returns {Uint24} A new Uint24 instance.
    */
   static fromValue(uint24: number): Uint24;

   /**
    * The numeric value of the Uint24.
    * @type {number}
    */
   get value(): number;
}

/**
 * Represents a 32-bit unsigned integer as a Uint8Array.
 */
export declare class Uint32 extends Uint8Array {
   /**
    * Constructs a Uint32 from an array.
    * @param {Uint8Array | number[]} array - The underlying array data.
    */
   constructor(array: Uint8Array | number[]);

   /**
    * Creates a Uint32 from a given array.
    * @param {Uint8Array | number[]} array - The source array.
    * @returns {Uint32} A new Uint32 instance.
    */
   static from(array: Uint8Array | number[]): Uint32;

   /**
    * Creates a Uint32 from a value.
    * @param {number} uint32 - A 32-bit unsigned integer (0-4294967295).
    * @returns {Uint32} A new Uint32 instance.
    */
   static fromValue(uint32: number): Uint32;

   /**
    * The numeric value of the Uint32.
    * @type {number}
    */
   get value(): number;
}
