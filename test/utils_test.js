import { assertEquals } from "jsr:@std/assert";
import { ensureUint8Array, concatOctet, uint8ArrayToValue } from "../src/utils.js";

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