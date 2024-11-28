/**
 * Represents a hexadecimal string and provides utilities for validation, normalization, and conversion to Uint8Array.
 */
export class HexaDecimal {
   private hexadecimal: string;

   /**
    * Creates a new HexaDecimal instance.
    * 
    * @param string - The hexadecimal string to store.
    */
   constructor(string: string);

   /**
    * Normalizes a hexadecimal string by removing spaces.
    * 
    * @param string - The string to normalize.
    * @returns A normalized string without spaces.
    */
   static normalize(string: string): string;

   /**
    * Validates a hexadecimal string.
    * 
    * @param string - The string to validate.
    * @throws TypeError - If the string contains invalid characters.
    * @throws Error - If the string length is not even.
    */
   static validate(string: string): void;

   /**
    * Converts a normalized hexadecimal string to a Uint8Array.
    * 
    * @param string - The hexadecimal string to convert.
    * @returns The Uint8Array representation of the hexadecimal string.
    * @throws TypeError - If the string contains invalid characters.
    * @throws Error - If the string length is not even.
    */
   static uint8Array(string: string): Uint8Array;

   /**
    * Creates a HexaDecimal instance from a string.
    * 
    * @param string - The string to convert to a HexaDecimal instance.
    * @returns A new HexaDecimal instance.
    */
   static fromString(string: string): HexaDecimal;

   /**
    * Creates a HexaDecimal instance from a Uint8Array.
    * 
    * @param array - The Uint8Array to convert.
    * @returns A new HexaDecimal instance.
    */
   static fromUint8Array(array: Uint8Array): HexaDecimal;

   /**
    * Returns the Uint8Array representation of the stored hexadecimal string.
    */
   get byte(): Uint8Array;

   /* returns hexa decimal string */
   get string(): String

   /* Returns hexa decimal string without spaces */
   get normalized(): String
}
