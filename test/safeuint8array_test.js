import { safeuint8array, SafeUint8Array } from "../src/safeuint8array.js";
import { assertEquals } from "jsr:@std/assert";

// Create a SafeUint8Array instance
const array1 = new SafeUint8Array(10, 20, 30);
assertEquals(array1.toString(), Uint8Array.of(10, 20, 30).toString())

// Use static method
const array2 = SafeUint8Array.fromItems(100, 200);
assertEquals(array2.toString(), Uint8Array.of(100, 200).toString());

const array16 = crypto.getRandomValues(new Uint8Array(16))
const array32 = crypto.getRandomValues(new Uint8Array(32))
const array48 = crypto.getRandomValues(new Uint8Array(48))

Deno.bench('using concat', ()=>{
   const a = array2.concat(array16, array32, array48);
})

Deno.bench('using safeuint8array', ()=>{
   const a = safeuint8array(array2,array16, array32, array48)
})

const a = safeuint8array(array2,array16, array32, array48)

const isByte = v=>Number.isInteger(v)&&v>=0&&v<=255

console.log(isByte('255'))
console.log(isByte(256))
console.log(isByte('abc'))
console.log(isByte(0x15))
const _n = null



