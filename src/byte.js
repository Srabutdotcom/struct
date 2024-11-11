// @ts-self-types="../type/byte.d.ts"
import { uint8ArrayToValue, Uint } from "./utils.js"

/**
 * Class representing a Byte, extending Uint8Array.
 * This class provides methods to create Byte instances from arrays and values.
 */
export class Byte extends Uint8Array {
   #value

   /**
    * Creates a Byte instance from an array.
    * @param {number[]} array - The array of numbers to create the Byte instance.
    * @returns {Byte} The created Byte instance.
    */
   static from(array) {
      return new Byte(array)
   }

   /**
    * Creates a Byte instance from a numeric value.
    * @param {number} value - The numeric value to convert to a Byte instance.
    * @returns {Byte} The created Byte instance.
    */
   static fromValue(value) {
      const uint = Uint.from(value);
      return Byte.from(uint.toUint8Array())
   }

   /**
    * Creates a Byte instance.
    * @param {number[]} array - The array of numbers to initialize the Byte instance.
    */
   constructor(array) {
      super(array.slice(0, 4));
      this.#value = uint8ArrayToValue(this)
   }

   /**
    * Gets the numeric value represented by the Byte instance.
    * @returns {number} The numeric value.
    */
   get value() { return this.#value }
}