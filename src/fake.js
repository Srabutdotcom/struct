// @ts-self-types="../type/fake.d.ts"

export class Fake extends Uint8Array {
   #items;

   static createFrom(...items) { return new Struct(...items) }

   static newStruct(...items) { return Struct.createFrom(...items) }

   constructor(...items) {
      // Concatenate all Uint8Array items into a single Uint8Array
      super(...items);
      this.#items = items;
   }

   get items() {
      return this.#items;
   }
}