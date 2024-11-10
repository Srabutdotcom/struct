Deno.bench({
   name: "Using division",
   fn: () => {
      function lengthOf(value) {
         let len = 1;
         while (true) {
            value = value / 256
            if (value < 1) break;
            len += 1
         }
         return len
      }
      const l = lengthOf(2**32-1)
   }
})

Deno.bench({
   name: "Using bitwise",
   fn: () => {
      function lengthOf(value) {
         let len = 1;
         while (value > 255) {
            value >>= 8;
            len++;
          }
         return len
      }
      const l = lengthOf(2**32-1)
   }
})

function lengthOfBit(value) {
   let len = 1;
   while (value > 255) {
      value >>= 8;
      len++;
    }
   return len
}

function lengthOfDiv(value) {
   let len = 1;
   while (true) {
      value = value / 256
      if (value < 1) break;
      len += 1
   }
   return len
}

const lDiv = lengthOfDiv(2**32-1);
const lBit = lengthOfBit(2**32-1);

debugger;