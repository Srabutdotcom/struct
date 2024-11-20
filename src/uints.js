//@ts-self-types="../type/uints.d.ts"

import { Uint } from "./utils.js";

/**
 * Represents an 8-bit unsigned integer as a Uint8Array.
 */
export class Uint8 extends Uint8Array {
   constructor(array){
      super(array.subarray(0,1))
   }
   static from(array){
      const copy = Uint8Array.from(array)
      return new Uint8(copy)
   }
   static fromValue(uint8) {
      const uint = Uint.from(uint8)
      return new Uint8(Uint8Array.of(uint % 256));
   }

   get value() { return this[0]; }
}

/**
 * Represents a 16-bit unsigned integer as a Uint8Array.
 */
export class Uint16 extends Uint8Array {
   constructor(array){
      super(array.subarray(0,2))
   }
   static from(array){
      const copy = Uint8Array.from(array)
      return new Uint16(copy)
   }
   static fromValue(uint16) {
      const uint = Uint.from(uint16)
      return new Uint16(Uint8Array.from([Math.trunc(uint / 256), uint % 256]));
   }

   get value() { return this[0] * 256 + this[1]; }
}

/**
 * Represents a 24-bit unsigned integer as a Uint8Array.
 */
export class Uint24 extends Uint8Array {
   constructor(array){
      super(array.subarray(0,3))
   }
   static from(array){
      const copy = Uint8Array.from(array)
      return new Uint24(copy)
   }
   static fromValue(uint24) {
      const uint = Uint.from(uint24)
      return new Uint24(Uint8Array.from([Math.trunc(uint / 65536), Math.trunc(uint / 256), uint % 256]));
   }
   get value() { return this[0] * 65536 + this[1] * 256 + this[2]; }
}

/**
 * Represents a 32-bit unsigned integer as a Uint8Array.
 */
export class Uint32 extends Uint8Array {
   constructor(array){
      super(array.subarray(0,4))
   }
   static from(array){
      const copy = Uint8Array.from(array)
      return new Uint32(copy)
   }
   static fromValue(uint32) {
      const uint = Uint.from(uint32)
      return new Uint32(Uint8Array.from([Math.trunc(uint / 16777216), Math.trunc(uint / 65536), Math.trunc(uint / 256), uint % 256]));
   }
   get value() { return this[0] * 16777216 + this[1] * 65536 + this[2] * 256 + this[3]; }
}
