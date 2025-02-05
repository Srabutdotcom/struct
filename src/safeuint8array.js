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

//console.log(isByte('128'));

const _n = null;

