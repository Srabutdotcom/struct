import { Byte } from "../src/byte.js"
import { uint8ArrayToValue } from "../src/utils.js"
import { assertEquals } from "jsr:@std/assert";

// Deno tests
Deno.test("Byte.from - Create Byte from array", () => {
   const byteInstance = Byte.from([1, 4, 5, 6, 7]);
   assertEquals(byteInstance.value, uint8ArrayToValue(new Uint8Array([1, 4, 5, 6])));
});

Deno.test("Byte constructor - Create Byte instance", () => {
   const byteInstance = new Byte([1, 4, 5, 6, 7]);
   assertEquals(byteInstance.value, uint8ArrayToValue(new Uint8Array([1, 4, 5, 6])));
});

Deno.test("Byte.from - Create Byte from smaller array", () => {
   const byteInstance = Byte.from([1, 4]);
   assertEquals(byteInstance.value, uint8ArrayToValue(new Uint8Array([1, 4])));
});

Deno.test("Byte.fromValue - Create Byte from numeric value", () => {
   const byteInstance = Byte.fromValue(260);
   assertEquals(byteInstance.value, uint8ArrayToValue(new Uint8Array([1, 4])));
});