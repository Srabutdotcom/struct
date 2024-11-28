import { backTrace } from "jsr:@std/internal@^1.0.5/diff";
import { HexaDecimal } from "../src/hexstring.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("HexaDecimal", () => {
   const test = HexaDecimal.fromString("99 38 1d e5 60").byte
   const back = HexaDecimal.fromUint8Array(test).byte
   assertEquals(test, back)

   const test2 = HexaDecimal.fromString("99381de560").byte
   const back2 = HexaDecimal.fromUint8Array(test2).byte
   assertEquals(test2, back2)
   const normalized = HexaDecimal.fromString("99381de560").normalized
   assertEquals(normalized, "99381de560")

})


