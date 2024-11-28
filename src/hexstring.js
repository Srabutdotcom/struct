//@ts-self-types="../type/hexstring.d.ts"

export class HexaDecimal {
   #hexadecimal
   constructor(string) {
      this.#hexadecimal = string;
   }

   static normalize(string) {
      // Normalize the string by removing spaces
      return string.replace(/\s+/g, '');
   }

   static validate(string) {
      // Validate the string format
      if (!/^[0-9a-fA-F]*$/.test(string)) {
         throw new TypeError("Invalid hexadecimal string");
      }
      // Ensure the length is even (hex pairs for each byte)
      if (string.length % 2 !== 0) {
         throw new Error("Hexadecimal string must have an even length");
      }
   }

   static uint8Array(string) {
      const normalize = HexaDecimal.normalize(string);
      HexaDecimal.validate(normalize)
      // Convert to Uint8Array
      const byteArray = new Uint8Array(normalize.length / 2);
      for (let i = 0; i < string.length; i += 2) {
         byteArray[i / 2] = parseInt(normalize.substring(i, i + 2), 16);
      }
      return byteArray;
   }

   static fromString(string){ return new HexaDecimal(string)}

   static fromUint8Array(array) {
      return HexaDecimal.fromString(Array.from(array, byte => byte.toString(16).padStart(2, '0')).join(''));
   }

   get byte(){
      return HexaDecimal.uint8Array(this.#hexadecimal)
   }

   get string(){
      return this.#hexadecimal
   }

   get normalized(){
      return HexaDecimal.normalize(this.#hexadecimal)
   }
}

