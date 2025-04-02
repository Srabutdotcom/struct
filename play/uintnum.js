import { Uint8, Uint16, Uint24, Uint32 } from "../src/uints.js";

const uint8 = Uint8.fromValue(2 ** 8 - 1);
const uint16 = Uint16.fromValue(2 ** 16 - 1);
const uint24 = Uint24.fromValue(2 ** 24 - 1);
const uint32 = Uint32.fromValue(2 ** 32 - 1);

function byteToUint(byte, useBigInt = false) {
   const r = byte.reduce((previous, current) => {
      return (previous << 8n) | BigInt(current)
   }, 0n)
   // Return as BigInt if useBigInt is true or the number exceeds safe limits
   if (useBigInt || r > BigInt(Number.MAX_SAFE_INTEGER)) {
      return r; // Return as BigInt
   }
   return Number(r); // Return as Number when safe
}

const sample_0 = Uint8Array.of(3);

const byte_0 = byteToUint(uint32);
const uint_0 = Uint32.from(uint32).value;

Deno.bench("using byteToUint", () => {
   const byte_0 = byteToUint(uint32);
})

Deno.bench("using Uint", () => {
   const uint_0 = Uint32.from(uint32).value;
})
/* 

benchmark                  time/iter (avg)        iter/s      (min … max)           p75      p99     p995
-------------------------- ----------------------------- --------------------- --------------------------
using byteToUint                  375.7 ns     2,662,000 (354.0 ns … 495.6 ns) 381.2 ns 454.4 ns 495.6 ns
using Uint                          1.3 µs       777,700 (  1.2 µs …   1.7 µs)   1.3 µs   1.7 µs   1.7 µs
using uintToBytes                   1.1 µs       907,700 (  1.0 µs …   1.3 µs)   1.1 µs   1.3 µs   1.3 µs
using Uint                        695.9 ns     1,437,000 (634.8 ns …   1.2 µs) 704.9 ns   1.2 µs   1.2 µs
using uintToBytes_simple          845.5 ns     1,183,000 (765.2 ns …   1.1 µs) 862.5 ns   1.1 µs   1.1 µs
using uintToBytes_faster           35.3 ns    28,310,000 ( 26.7 ns …  93.0 ns)  38.5 ns  59.8 ns  63.6 ns
using byteToUint_simple            55.5 ns    18,010,000 ( 49.2 ns … 143.7 ns)  58.2 ns  81.3 ns  90.0 ns

*/


function uintToBytes(value, byteLength = null) {
   if (typeof value !== "bigint" && (typeof value !== "number" || !Number.isSafeInteger(value))) {
      throw new TypeError("Value must be a safe integer or BigInt.");
   }

   let bigIntValue = BigInt(value);
   let bytes = [];

   while (bigIntValue > 0) {
      bytes.unshift(Number(bigIntValue & 0xffn)); // Extract the last 8 bits
      bigIntValue >>= 8n; // Shift right by 8 bits
   }

   // If byteLength is specified, adjust the length
   if (byteLength !== null) {
      if (bytes.length > byteLength) {
         throw new RangeError("Byte length is too small for the given integer.");
      }
      while (bytes.length < byteLength) {
         bytes.unshift(0); // Pad with leading zeros
      }
   }

   return new Uint8Array(bytes);
}

const sample_1 = 305419896;

const uint_1 = Uint32.fromValue(sample_1);
const uintToBytes_1 = uintToBytes(sample_1);

Deno.bench("using uintToBytes", () => {
   const uint_1 = uintToBytes(sample_1);
})

Deno.bench("using Uint", () => {
   const uint_1 = Uint32.fromValue(sample_1);
})

function uintToBytes_simple(value, byteLength = null) {
   if (typeof value !== "number" || !Number.isSafeInteger(value)) {
      throw new TypeError("Value must be a safe integer .");
   }

   let bigIntValue = value;
   let bytes = [];

   while (bigIntValue > 0) {
      bytes.unshift(bigIntValue & 0xff); // Extract the last 8 bits
      bigIntValue >>= 8; // Shift right by 8 bits
   }

   // If byteLength is specified, adjust the length
   if (byteLength !== null) {
      if (bytes.length > byteLength) {
         throw new RangeError("Byte length is too small for the given integer.");
      }
      while (bytes.length < byteLength) {
         bytes.unshift(0); // Pad with leading zeros
      }
   }

   return new Uint8Array(bytes);
}

Deno.bench("using uintToBytes_simple", () => {
   const uint_1 = uintToBytes_simple(sample_1);
})

function uintToBytes_faster(value, byteLength = 4) {
   if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0 || value > 0xFFFFFFFF) {
      throw new TypeError("Value must be a safe integer between 0 and 2^32 - 1.");
   }

   const bytes = [];

   for (let i = byteLength - 1; i >= 0; i--) {
      bytes[i] = value & 0xFF;
      value >>= 8;
   }

   return bytes;
}

Deno.bench("using uintToBytes_faster", () => {
   const uint_1 = uintToBytes_faster(sample_1);
})

function byteToUint_simple(byte) {
   return byte.reduce((previous, current) => (previous << 8) | current, 0)
}

Deno.bench("using byteToUint_simple", () => {
   const byte_0 = byteToUint_simple(uint32);
})

debugger;