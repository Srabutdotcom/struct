import { assertEquals } from "@std/assert";
import { Uint8, Uint16, Uint24, Uint32 } from "../src/uints.js";

Deno.test("Uints", () => {
   const uint8 = Uint8.fromValue(2 ** 8 - 1);
   const uint16 = Uint16.fromValue(2 ** 16 - 1);
   const uint24 = Uint24.fromValue(2 ** 24 - 1);
   const uint32 = Uint32.fromValue(2 ** 32 - 1);

   assertEquals(uint8, Uint8.from(uint8))
   assertEquals(uint16, Uint16.from(uint16))
   assertEquals(uint24, Uint24.from(uint24))
   assertEquals(uint32, Uint32.from(uint32))
})

const uint8 = Uint8.fromValue(2 ** 8 - 1);
const uint16 = Uint16.fromValue(2 ** 16 - 1);
const uint24 = Uint24.fromValue(2 ** 24 - 1);
const uint32 = Uint32.fromValue(2 ** 32 - 1);

const uint8back = Uint8.from(uint8);
const uint16back = Uint16.from(uint16);
const uint24back = Uint24.from(uint24);
const uint32back = Uint32.from(uint32);

const _n = null;