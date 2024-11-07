import { assertEquals } from "jsr:@std/assert";
import { Constrained } from "../src/constrained.js";

Deno.test("Constrained - Valid initialization", () => {
  class TestConstrained extends Constrained {}
  const constrained = new TestConstrained(2, 5, new Uint8Array([1, 2]), 3);
  assertEquals(constrained.items.length, 2);
  assertEquals(constrained.items[0], new Uint8Array([1, 2]));
  assertEquals(constrained.items[1], 3);
});

Deno.test("Constrained - Invalid MIN/MAX", () => {
  class TestConstrained extends Constrained {}
  let errorOccurred = false;
  try {
    new TestConstrained(-1, 5);
  } catch (e) {
    errorOccurred = e instanceof RangeError;
  }
  assertEquals(errorOccurred, true);

  errorOccurred = false;
  try {
    new TestConstrained(5, 2);
  } catch (e) {
    errorOccurred = e instanceof RangeError;
  }
  assertEquals(errorOccurred, true);
});

Deno.test("Constrained - Abstract class instantiation", () => {
  let errorOccurred = false;
  try {
    new Constrained(2, 5);
  } catch (e) {
    errorOccurred = e instanceof Error;
  }
  assertEquals(errorOccurred, true);
}); 