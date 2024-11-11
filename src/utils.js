// @ts-self-types="../type/utils.d.ts"

/**
 * Ensures that all provided items are Uint8Array instances or converts them from numbers.
 * @param {...(Uint8Array|number)} items - The items to validate or convert.
 * @returns {Uint8Array[]} An array of Uint8Array instances.
 * @throws {TypeError} If an item is not a Uint8Array or number.
 * @throws {RangeError} If a number is not between 0 and 255.
 */
export function ensureUint8Array(...items) {
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
   return validatedItems
}

/**
 * Concatenates multiple Uint8Array instances into a single Uint8Array.
 * @param {...Uint8Array} arrays - The arrays to concatenate.
 * @returns {Uint8Array} A new Uint8Array containing all the concatenated arrays.
 */
export function concatOctet(...arrays) {
   arrays = ensureUint8Array(...arrays)
   const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
   const result = new Uint8Array(totalLength);
   let offset = 0;

   arrays.forEach(arr => {
      result.set(arr, offset);
      offset += arr.length;
   });

   return result;
}

/**
 * Class representing a value converted to a Uint8Array.
 * @extends Uint8Array
 */
export class ValueToUint8Array extends Uint8Array {
   static converterMap = [
      (value) => Math.trunc(value / 16777216),
      (value) => Math.trunc(value / 65536),
      (value) => Math.trunc(value / 256),
      (value) => value % 256
   ];

   /**
     * Creates an instance of ValueToUint8Array.
     * @param {number} max - The maximum value.
     * @param {number} value - The value to convert.
     */
   constructor(max, value) {
      super(lengthOf(max));
      this.fromValue(value);
   }
   /**
     * Creates a new ValueToUint8Array instance.
     * @param {number} max - The maximum value.
     * @param {number} value - The value to convert.
     * @returns {ValueToUint8Array} A new instance.
     */
   static of(max, value) { return new ValueToUint8Array(max, value) }
   /**
     * Converts a value to a Uint8Array.
     * @param {number} value - The value to convert.
     */
   fromValue(value) {
      let j = 3;
      for (let i = this.length - 1; i >= 0; i--) {
         this[i] = ValueToUint8Array.converterMap[j](value);
         j--;
      }
   }
}

function lengthOf(value) {
   let len = 1;
   while (true) {
      value = value / 256
      if (value < 1) break;
      len += 1
   }
   return len
}

var byteMultiplier = [
   16777216,
   65536,
   256,
   1
]
var converters = [
   (value) => Math.trunc(value / 16777216),
   (value) => Math.trunc(value / 65536),
   (value) => Math.trunc(value / 256),
   (value) => value % 256
];

/**
 * Converts a Uint8Array to a numeric value.
 * @param {Uint8Array} uint8array - The Uint8Array to convert.
 * @returns {number} The numeric value.
 * @throws {TypeError} If the input is not a Uint8Array.
 * @throws {RangeError} If the Uint8Array length is greater than 4.
 */
export function uint8ArrayToValue(uint8array) {
   if (!(uint8array instanceof Uint8Array)) {
      throw new TypeError(`expected Uint8Array as single parameter`)
   }
   if (uint8array.length > 4) {
      throw new RangeError(`Max length of Uint8Array is 4`)
   }
   if (uint8array.length == 0) return 0;
   let value = 0;
   let j = 3
   for (let i = uint8array.length - 1; i >= 0; i--) {
      value += uint8array[i] * byteMultiplier[j];
      j--
   }
   return value;
}

export class Byte extends Uint8Array {
   constructor(array){
      super(array)
   }
   Value(){ return uint8ArrayToValue(this)}
}

/**
 * Class representing a positive integer with a maximum value and byte length.
 */
export class Uint {
   #uint
   #MAX
   #byteLength
   static from(value, max) { return new Uint(value, max) }
   constructor(value, max) {
      this.#uint = this.validate(value)
      this.setMax(max);
      this.getMaxAndByteLength(value)
   }
   /**
    * Validates the value to ensure it is a positive integer.
    * @param {number|string} value - The value to validate.
    * @returns {number} The validated positive integer.
    * @throws {TypeError} If the value is not a positive integer.
    */
   validate(value) {
      const num = Number(value);
      if (!Number.isInteger(num) || num <= 0) {
         throw new TypeError("Value must be a positive integer");
      }
      return num;
   }
   /**
    * Update MAX and byteLength based on value.
    * @param {number} value - The value to check.
    */
   getMaxAndByteLength(value) {
      if (this.#MAX) return
      if (value < 256) {
         this.#MAX = 255;
         this.#byteLength = 1; return
      } else if (value < 65536) {
         this.#MAX = 65535;
         this.#byteLength = 2; return
      } else if (value < 16777216) {
         this.#MAX = 16777215;
         this.#byteLength = 3; return
      } else {
         this.#MAX = 4294967295;
         this.#byteLength = 4; return
      }
   }
   /**
    * Sets the maximum value and byte length based on the provided max.
    * @param {number} max - The maximum value to set.
    */
   setMax(max) {
      if(!max) return
      if (max == 1) {
         this.#MAX = 256;
         this.#byteLength = 1; return
      } else if (max == 2) {
         this.#MAX = 65536;
         this.#byteLength = 2; return
      } else if (max == 3) {
         this.#MAX = 16777216;
         this.#byteLength = 3; return
      } else if (max == 4) {
         this.#MAX = 4294967296;
         this.#byteLength = 4; return
      } else {
         this.#MAX = max;
         this.#byteLength = lengthOf(this.#MAX); return
      }
   }
   /**
    * Converts the value to a Uint8Array with the calculated byte length.
    * @returns {Uint8Array} The Uint8Array representation of the value.
    */
   toUint8Array() {
      const uint8array = new Uint8Array(this.#byteLength);
      let j = 3;
      for (let i = this.#byteLength - 1; i >= 0; i--) {
         uint8array[i] = converters[j](this.#uint);
         j--;
      }
      return uint8array
   }
   /**
    * Gets the maximum value.
    * @returns {number} The maximum value.
    */
   get MAX() { return this.#MAX }
   /**
    * Gets the byte length.
    * @returns {number} The byte length.
    */
   get byteLength() { return this.#byteLength }
}
