# Struct Class for TLS 1.3

## Overview

The `Struct` class extends the `Uint8Array` to represent a structured collection of data as defined in the TLS 1.3 specification. It provides a way to create, manipulate, and manage arrays of `Uint8Array` or numbers while ensuring proper type validation and concatenation of values.

## Features

- **Flexible Construction**: Create a `Struct` instance with an array of `Uint8Array` or numbers.
- **Automatic Concatenation**: When initialized, values are automatically concatenated into a single `Uint8Array`.
- **Member Access**: Access the individual components of the `Struct` via the `items` property.
- **Static Factory Method**: Use `Struct.createFrom` or `Struct.newStruct` to create instances.

## Usage

### Creating a Struct

You can create a `Struct` instance with either `Uint8Array` instances or numbers:

```javascript
import { Struct } from './struct.js';

// Using the constructor directly
const struct1 = new Struct(new Uint8Array([1, 2]), new Uint8Array([3]));
const struct2 = new Struct(1, 2, 3); // Converts numbers to Uint8Array

console.log(struct1); // Uint8Array(5) [ 1, 2, 3 ]
console.log(struct2.items); // [ Uint8Array(1) [ 1 ], Uint8Array(1) [ 2 ], Uint8Array(1) [ 3 ] ]
```

### Using Static Methods

You can also create a `Struct` instance using the static methods:

```javascript
const struct3 = Struct.createFrom(new Uint8Array([4, 5]), 6);
const struct4 = Struct.newStruct(7, 8, new Uint8Array([9]));

console.log(struct3.items); // [ Uint8Array(1) [ 4 ], Uint8Array(1) [ 5 ], Uint8Array(1) [ 6 ] ]
console.log(struct4.items); // [ Uint8Array(1) [ 7 ], Uint8Array(1) [ 8 ], Uint8Array(1) [ 9 ] ]
```

### Default Initialization

If no arguments are passed during initialization, a default value of `1` is assigned:

```javascript
const defaultStruct = new Struct();
console.log(defaultStruct.items); // [ Uint8Array(0) [ 0 ] ]
```

## Constrained Class

The `Constrained` class extends the `Uint8Array` to represent an array with specified minimum and maximum length constraints. It ensures that the data adheres to these constraints during initialization.

### Features

- **Length Constraints**: Specify minimum and maximum lengths for the data.
- **Type Validation**: Automatically validates that the provided items are either `Uint8Array` or numbers.

### Usage

You can create a `Constrained` instance as follows:

```javascript
import { Constrained } from './constrained.js';

class TestConstrained extends Constrained {}

const constrained = new TestConstrained(2, 5, new Uint8Array([1, 2]), 3);
console.log(constrained.items); // [ Uint8Array(1) [ 1, 2 ], Uint8Array(1) [ 3 ] ]
```

### Error Handling

The constructor will throw errors if the constraints are violated:

```javascript
try {
    const invalidConstrained = new TestConstrained(-1, 5);
} catch (e) {
    console.error(e); // RangeError: MIN length cannot be negative.
}
```

## Utility Functions

The `utils.js` file contains several utility functions that assist with the manipulation and validation of `Uint8Array` data.

### Functions

- **`ensureUint8Array(...items)`**: Validates that all provided items are `Uint8Array` instances or converts them from numbers.
  
  ```javascript
  import { ensureUint8Array } from './utils.js';
  
  const result = ensureUint8Array(new Uint8Array([1, 2]), 3);
  ```

- **`concatOctet(...arrays)`**: Concatenates multiple `Uint8Array` instances into a single `Uint8Array`.
  
  ```javascript
  import { concatOctet } from './utils.js';
  
  const concatenated = concatOctet(new Uint8Array([1]), new Uint8Array([2, 3]));
  ```

- **`uint8ArrayToValue(uint8array)`**: Converts a `Uint8Array` to a numeric value.
  
  ```javascript
  import { uint8ArrayToValue } from './utils.js';
  
  const value = uint8ArrayToValue(new Uint8Array([0, 0, 1, 0])); // 256
  ```

## Type Definitions

The type definitions for the `Struct`, `Constrained`, and utility functions can be found in the accompanying `.d.ts` files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss changes.

### Donation
- https://paypal.me/aiconeid


