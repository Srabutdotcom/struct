// @ts-self-types="../type/struct.d.ts"
/**
 * A class that represents a structure composed of multiple `Uint8Array` or `number` values.
 * The `Struct` class stores an array of `Uint8Array` members and concatenates them into a single `Uint8Array`.
 */
export class Struct extends Uint8Array {
   /** @type {Uint8Array[]} */
   #member;

   static from(...items) { return new Struct(...items) }
   /**
    * Creates a new Struct instance.
    *
    * @param {...(Uint8Array|number)} items - Items to include in the structure. Each item can be either
    *                                         a `Uint8Array` or a `number` (which will be converted to `Uint8Array`).
    * @throws {TypeError} If any argument is neither a `Uint8Array` nor a `number`.
    */
   constructor(...items) {
      const validatedItems = items.length === 0
         ? [new Uint8Array()]
         : items.map(item => {
            if (item instanceof Uint8Array) return item;
            const num = typeof item === "number" ? item : Number(item);
            if (!Number.isNaN(num)) {
               if (num < 0 || num > 255) {
                  throw new RangeError("Number values must be between 0 and 255");
               }
               return Uint8Array.of(num);
            }
            throw new TypeError("Expected all arguments to be Uint8Array or number");
         });

      // Concatenate all Uint8Array items into a single Uint8Array
      super(Struct.concat(...validatedItems));
      this.#member = validatedItems;
   }

   /**
    * Returns the array of `Uint8Array` members in the structure.
    *
    * @returns {Uint8Array[]} An array of the `Uint8Array` members.
    */
   get member() {
      return this.#member;
   }

   /**
    * Concatenates multiple `Uint8Array` instances into a single `Uint8Array`.
    *
    * @param {...Uint8Array} arrays - The `Uint8Array` instances to concatenate.
    * @returns {Uint8Array} A single `Uint8Array` containing all data from the input arrays.
    */
   static concat(...arrays) {
      const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
      const result = new Uint8Array(totalLength);
      let offset = 0;

      arrays.forEach(arr => {
         result.set(arr, offset);
         offset += arr.length;
      });

      return result;
   }
}


// npx -p typescript tsc ./src/struct.js --declaration --allowJs --emitDeclarationOnly --lib ESNext --outDir ./dist