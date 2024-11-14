//@ts-self-types="../type/uints.d.ts"

/**
 * Represents an 8-bit unsigned integer as a Uint8Array.
 */
export class Uint8 extends Uint8Array {
   static fromValue(uint8) {
      return new Uint8([uint8 % 256]);
   }

   get value() { return this[0]; }
}

/**
 * Represents a 16-bit unsigned integer as a Uint8Array.
 */
export class Uint16 extends Uint8Array {
   static fromValue(uint16) {
      return new Uint16([Math.trunc(uint16 / 256), uint16 % 256]);
   }

   get value() { return this[0] * 256 + this[1]; }
}

/**
 * Represents a 24-bit unsigned integer as a Uint8Array.
 */
export class Uint24 extends Uint8Array {
   static fromValue(uint24) {
      return new Uint24([Math.trunc(uint24 / 65536), Math.trunc(uint24 / 256), uint24 % 256]);
   }
   get value() { return this[0] * 65536 + this[1] * 256 + this[2]; }
}

/**
 * Represents a 32-bit unsigned integer as a Uint8Array.
 */
export class Uint32 extends Uint8Array {
   static fromValue(uint32) {
      return new Uint32([Math.trunc(uint32 / 16777216), Math.trunc(uint32 / 65536), Math.trunc(uint32 / 256), uint32 % 256]);
   }
   get value() { return this[0] * 16777216 + this[1] * 65536 + this[2] * 256 + this[3]; }
}
