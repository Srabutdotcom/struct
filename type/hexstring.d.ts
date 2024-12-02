/**
 * A utility class for working with hexadecimal strings and conversions.
 */
export class HexaDecimal {
   /**
    * Constructs a new HexaDecimal instance with a given string.
    * @param {string} string - The hexadecimal string.
    */
   constructor(string: string);

   /**
    * Normalize a hexadecimal string by removing spaces.
    * @param {string} string - The input string to normalize.
    * @returns {string} - The normalized string without spaces.
    */
   static normalize(string: string): string;

   /**
    * Validates whether a string is a properly formatted hexadecimal string.
    * Ensures the string contains only valid hex characters and has an even length.
    * @param {string} string - The string to validate.
    * @throws {TypeError} If the string contains invalid characters.
    * @throws {Error} If the string length is not even.
    */
   static validate(string: string): void;

   /**
    * Converts a hexadecimal string into a Uint8Array.
    * @param {string} string - The hexadecimal string to convert.
    * @returns {Uint8Array} - The resulting Uint8Array.
    */
   static uint8Array(string: string): Uint8Array;

   /**
    * Creates a HexaDecimal instance from a hexadecimal string.
    * @param {string} string - The hexadecimal string.
    * @returns {HexaDecimal} - The new HexaDecimal instance.
    */
   static fromString(string: string): HexaDecimal;

   /**
    * Creates a HexaDecimal instance from a Uint8Array.
    * @param {Uint8Array} array - The array to convert to a HexaDecimal.
    * @returns {HexaDecimal} - The new HexaDecimal instance.
    */
   static fromUint8Array(array: Uint8Array): HexaDecimal;

   /**
    * Creates a HexaDecimal instance from a Base64URL-encoded string.
    * @param {string} base64url - The Base64URL string to convert.
    * @returns {HexaDecimal} - The new HexaDecimal instance.
    */
   static fromBase64Url(base64url: string): HexaDecimal;

   /**
    * The hexadecimal string as a Uint8Array.
    * @type {Uint8Array}
    * @readonly
    */
   readonly byte: Uint8Array;

   /**
    * The original hexadecimal string.
    * @type {string}
    * @readonly
    */
   readonly string: string;

   /**
    * The normalized hexadecimal string without spaces.
    * @type {string}
    * @readonly
    */
   readonly normalized: string;

   /**
    * The Base64URL representation of the hexadecimal data.
    * @type {string}
    * @readonly
    */
   readonly base64url: string;
}
