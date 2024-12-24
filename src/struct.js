// @ts-self-types="../type/struct.d.ts"

import { safeuint8array } from "./safeuint8array.js"

/**
 * A class that represents a structure composed of multiple `Uint8Array` or `number` values.
 * The `Struct` class stores an array of `Uint8Array` members and concatenates them into a single `Uint8Array`.
 */
export class Struct extends Uint8Array {
   /** @type {Uint8Array[]} */
   #items;

   /**
    * Creates a new Struct instance from the given items.
    * @param {...(Uint8Array|number)} items - Items to include in the structure.
    * @returns {Struct} A new Struct instance.
    */
   static createFrom(...items) { return new Struct(...items) }

   /**
    * Alias for createFrom to create a new Struct instance.
    * @param {...(Uint8Array|number)} items - Items to include in the structure.
    * @returns {Struct} A new Struct instance.
    */
   static newStruct(...items) { return Struct.createFrom(...items) }

   /**
    * Creates a new Struct instance.
    *
    * @param {...(Uint8Array|number)} items - Items to include in the structure. Each item can be either
    *                                         a `Uint8Array` or a `number` (which will be converted to `Uint8Array`).
    * @throws {TypeError} If any argument is neither a `Uint8Array` nor a `number`.
    */
   constructor(...items) {
      // Concatenate all Uint8Array items into a single Uint8Array
      super(safeuint8array(...items));
      this.#items = items;
   }

   /**
    * Returns the array of `Uint8Array` members in the structure.
    *
    * @returns {Uint8Array[]} An array of the `Uint8Array` members.
    */
   get items() {
      return this.#items;
   }

   get byte() { return new Uint8Array(this)};
}

// npx -p typescript tsc ./src/struct.js --declaration --allowJs --emitDeclarationOnly --lib ESNext --outDir ./dist