# Struct Class for TLS 1.3

## Overview

The `Struct` class extends the `Uint8Array` to represent a structured collection of data as defined in the TLS 1.3 specification. It provides a way to create, manipulate, and manage arrays of `Uint8Array` or numbers while ensuring proper type validation and concatenation of values.

## Features

- **Flexible Construction**: Create a `Struct` instance with an array of `Uint8Array` or numbers.
- **Automatic Concatenation**: When initialized, values are automatically concatenated into a single `Uint8Array`.
- **Member Access**: Access the individual components of the `Struct` via the `member` property.

## Usage

### Creating a Struct

You can create a `Struct` instance with either `Uint8Array` instances or numbers:

```javascript
import { Struct } from './struct.js';

const struct1 = new Struct(new Uint8Array([1, 2]), new Uint8Array([3]));
const struct2 = new Struct(1, 2, 3); // Converts numbers to Uint8Array

console.log(struct1); // Uint8Array(5) [ 1, 2, 3 ]
console.log(struct2.member); // [ Uint8Array(1) [ 1 ], Uint8Array(1) [ 2 ], Uint8Array(1) [ 3 ] ]
```

### Default Initialization

If no arguments are passed during initialization, a default value of `1` is assigned:

```javascript
const defaultStruct = new Struct();
console.log(defaultStruct.member); // [ Uint8Array(0) [ 0 ] ]
```

## Methods

### Constructor

The constructor accepts a variable number of arguments, which can be either `Uint8Array` instances or numbers. It validates and concatenates the values into a single `Uint8Array`.

### `member`

The `member` property returns an array of `Uint8Array` instances that were passed during initialization.

## Type Definitions

The type definitions for the `Struct` class can be found in the accompanying `struct.d.ts` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss changes.

### Donation
- https://paypal.me/aiconeid


