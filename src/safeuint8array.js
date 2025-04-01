//@ts-self-types="../type/safeuint8array.d.ts"
export class SafeUint8Array extends Uint8Array {
   constructor(...items) {
      super(items.reduce((sum, arr) => sum + (arr?.length ?? 1), 0));
      let offset = 0;
      for (const item of items) {
         item instanceof Uint8Array
            ? (this.set(item, offset), offset += item.length)
            : isByte(item) && (this[offset++] = item);
      }
   }

   static fromItems(...items) {
      return new SafeUint8Array(...items);
   }

   concat(...items) {
      return new SafeUint8Array(this, ...items)
   }

   get byte() { return new Uint8Array(this) }
}

const isByte = v => (
   Number.isInteger(v) &&
   v >= 0 &&
   v <= 255
)

const isUint8Array = v => v instanceof Uint8Array;

export function safeuint8array(...ar) {
   const r = new Uint8Array(ar.reduce((s, a) => s + (a?.length ?? 1), 0))
   let of = 0;
   for (const i of ar) {
      i instanceof Uint8Array
         ? (r.set(i, of), of += i.length)
         : isByte(i) && (r[of++] = i);
   }
   return r
}

export class ByteJoin {
   #buffer = new ArrayBuffer(512, { maxByteLength: 8192 })
   #byte = new Uint8Array(this.#buffer);
   #length = 0 
   constructor(...arrs) {
      let pos_0 = 0;
      let pos_1 = 0;
      for (const item of arrs) {
         if (!isUint8Array(item) && !isByte(item)) throw Error(`Expected Uint8Array or single byte value`)
         pos_1 = pos_0 + (item?.length ?? 1);
         if (pos_1 > this.#byte.length) this.#buffer.resize(Math.min(this.#byte.length, this.#buffer.maxByteLength));
         isUint8Array(item) ?
            this.#byte.set(item, pos_0) :
            this.#byte[pos_0] = item
         pos_0 = pos_1
      }
      this.#length = pos_1;
   }
   get byte(){ return this.#byte.subarray(0, this.#length) }
}

export function byteJoin(...arr){
   return new ByteJoin(...arr).byte
}
//console.log(isByte('128'));

const _n = null;

