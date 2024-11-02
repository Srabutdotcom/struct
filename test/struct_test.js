import { assertEquals } from "jsr:@std/assert";
import { Struct } from "../src/struct.js";

Deno.test("Struct - Initialization with Uint8Array items", () => {
  const item1 = new Uint8Array([1, 2, 3]);
  const item2 = new Uint8Array([4, 5, 6]);
  const struct = new Struct(item1, item2);

  assertEquals(struct.member.length, 2);
  assertEquals(struct.member[0], item1);
  assertEquals(struct.member[1], item2);
  assertEquals(struct.length, 6);
  assertEquals(struct[0], 1);
  assertEquals(struct[5], 6);
});

Deno.test("Struct - Initialization with number items", () => {
  const struct = new Struct(10, 20, 30);

  assertEquals(struct.member.length, 3);
  assertEquals(struct.member[0], new Uint8Array([10]));
  assertEquals(struct.member[1], new Uint8Array([20]));
  assertEquals(struct.member[2], new Uint8Array([30]));
  assertEquals(struct.length, 3);
  assertEquals(struct[0], 10);
  assertEquals(struct[2], 30);
});

Deno.test("Struct - Mixed Uint8Array and number items", () => {
  const item1 = new Uint8Array([1, 2, 3]);
  const struct = new Struct(item1, 10, new Uint8Array([4, 5]));

  assertEquals(struct.member.length, 3);
  assertEquals(struct.member[0], item1);
  assertEquals(struct.member[1], new Uint8Array([10]));
  assertEquals(struct.member[2], new Uint8Array([4, 5]));
  assertEquals(struct.length, 6);
  assertEquals(struct[0], 1);
  assertEquals(struct[5], 5);
});

Deno.test("Struct - Empty initialization", () => {
  const struct = new Struct();

  assertEquals(struct.member.length, 1);
  assertEquals(struct.length, 0);
});

Deno.test("Struct - Check concatenation integrity", () => {
  const item1 = new Uint8Array([0, 1]);
  const item2 = new Uint8Array([2, 3]);
  const struct = new Struct(item1, item2);

  assertEquals(struct.length, 4);
  assertEquals(struct[0], 0);
  assertEquals(struct[1], 1);
  assertEquals(struct[2], 2);
  assertEquals(struct[3], 3);
});
