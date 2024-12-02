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

   static fromString(string) { return new HexaDecimal(string) }

   static fromUint8Array(array) {
      return HexaDecimal.fromString(Array.from(array, byte => byte.toString(16).padStart(2, '0')).join(''));
   }

   static fromBase64Url(base64url) {
      // Convert Base64URL to standard Base64 by replacing URL-safe characters
      const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');

      // Decode Base64 string into a Uint8Array
      const binaryData = Uint8Array.from(atob(base64), char => char.charCodeAt(0));

      return HexaDecimal.fromUint8Array(binaryData)
   }

   get byte() {
      return HexaDecimal.uint8Array(this.#hexadecimal)
   }

   get string() {
      return this.#hexadecimal
   }

   get normalized() {
      return HexaDecimal.normalize(this.#hexadecimal)
   }

   get base64url() {
      const encoded = btoa(String.fromCharCode.apply(null, this.byte));
      return encoded.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
   }
}

