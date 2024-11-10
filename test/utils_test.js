import { assertEquals } from "jsr:@std/assert";
import { ensureUint8Array, concatOctet, uint8ArrayToValue } from "../src/utils.js";
import { ValueToUint8Array } from "../src/utils.js";
import { Uint } from "../src/utils.js";

Deno.test("ensureUint8Array - Valid inputs", () => {
  const result = ensureUint8Array(new Uint8Array([1, 2]), 3);
  assertEquals(result.length, 2);
  assertEquals(result[0], new Uint8Array([1, 2]));
  assertEquals(result[1], new Uint8Array([3]));
});

Deno.test("ensureUint8Array - Invalid input", () => {
  let errorOccurred = false;
  try {
    ensureUint8Array("invalid");
  } catch (e) {
    errorOccurred = e instanceof TypeError;
  }
  assertEquals(errorOccurred, true);
});

Deno.test("concatOctet - Concatenates arrays", () => {
  const result = concatOctet(new Uint8Array([1, 2]), new Uint8Array([3, 4]));
  assertEquals(result, new Uint8Array([1, 2, 3, 4]));
});

Deno.test("uint8ArrayToValue - Converts to number", () => {
  const result = uint8ArrayToValue(new Uint8Array([0, 0, 1, 0]));
  assertEquals(result, 256);
  const test = uint8ArrayToValue(new Uint8Array([0, 10]))
  assertEquals(test, 10)
});

Deno.test("uint8ArrayToValue - Invalid input", () => {
  let errorOccurred = false;
  try {
    uint8ArrayToValue("invalid");
  } catch (e) {
    errorOccurred = e instanceof TypeError;
  }
  assertEquals(errorOccurred, true);
});

Deno.test("ValueToUint8Array", () => {
  const test = ValueToUint8Array.of(2 ** 32 - 1, 256);
  const back = uint8ArrayToValue(test)
  assertEquals(test.toString(), new Uint8Array([0, 0, 1, 0]).toString())
  assertEquals(back, 256)
})

Deno.test("Uint", () => {
  const uint100 = Uint.from(100);
  assertEquals(uint100.toUint8Array().toString(), "100", "Uint.from(100)");
  const uint300_3 = Uint.from(300, 16777215);
  assertEquals(uint300_3.toUint8Array().toString(), "0,1,44", "Uint.from(300, 16777215)");
  const uint300_4 = Uint.from(300, 16777216);
  assertEquals(uint300_4.toUint8Array().toString(), "0,0,1,44", "Uint.from(300, 16777216)");
  const uint400_3 = Uint.from(400, 3);
  assertEquals(uint400_3.toUint8Array().toString(), "0,1,144", "Uint.from(400, 3)");
})


