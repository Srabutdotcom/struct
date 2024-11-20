import { assertEquals } from "@std/assert";
import { Uint8, Uint16, Uint24, Uint32 } from "../src/uints.js";

Deno.test("Uints", () => {
   const uint8 = Uint8.fromValue(2 ** 8 - 1);
   const uint16 = Uint16.fromValue(2 ** 16 - 1);
   const uint24 = Uint24.fromValue(2 ** 24 - 1);
   const uint32 = Uint32.fromValue(2 ** 32 - 1);

   assertEquals(uint8.length, 1)
   assertEquals(uint16.length, 2)
   assertEquals(uint24.length, 3)
   assertEquals(uint32.length, 4)
})
