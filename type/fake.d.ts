export declare class Fake extends Uint8Array {
   /** 
    * Private array to hold items passed to the constructor.
    * @private
    */
   #items: Uint8Array[];

   /**
    * Creates a new Fake instance from the provided Uint8Array items.
    * @param {...Uint8Array[]} items - The Uint8Array items to create the Fake from.
    * @returns {Fake} The new Fake instance.
    */
   static createFrom(...items: Uint8Array[]): Fake;

   /**
    * Alias for createFrom method to create a new Fake instance.
    * @param {...Uint8Array[]} items - The Uint8Array items to create the Fake from.
    * @returns {Fake} The new Fake instance.
    */
   static newStruct(...items: Uint8Array[]): Fake;

   /**
    * Constructs a Fake by concatenating all Uint8Array items into a single Uint8Array.
    * @param {...Uint8Array[]} items - The Uint8Array items to include in the Fake.
    */
   constructor(...items: Uint8Array[]);

   /**
    * Gets the items array containing the Uint8Array elements passed to the constructor.
    * @returns {Uint8Array[]} The array of Uint8Array items.
    */
   get items(): Uint8Array[];
}
