# 📦 Direct Helpers

[![npm version](https://img.shields.io/npm/v/direct-helpers.svg)](https://www.npmjs.com/package/direct-helpers)
[![License](https://img.shields.io/npm/l/direct-helpers.svg)](https://github.com/bhargav-tibadiya/direct-helpers/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/badge/bundle%20size-minimal-green.svg)](https://www.npmjs.com/package/direct-helpers)

A lightweight, zero-dependency TypeScript utility library providing a collection of helper functions for common operations. Perfect for daily development tasks.

## 📥 Installation

```bash
# npm
npm install direct-helpers

# yarn
yarn add direct-helpers

# pnpm
pnpm add direct-helpers
```

## 🚀 Usage

```typescript
// Import the entire library
import * as directHelpers from 'direct-helpers';

// Or import specific modules
import { stringUtils, numberUtils } from 'direct-helpers';

// Or import specific functions directly
import { capitalize } from 'direct-helpers/string';
import { getRandomNumber } from 'direct-helpers/number';

// Examples
stringUtils.capitalize('hello');        // 'Hello'
numberUtils.getRandomNumber(1, 100);    // Random number between 1 and 100
```

## 📚 API Reference

### 🔤 String Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `capitalize(str)` | Capitalizes the first letter of a string | `capitalize('hello')` → `'Hello'` |
| `capitalizeWords(str)` | Capitalizes the first letter of each word | `capitalizeWords('hello world')` → `'Hello World'` |
| `countWords(str)` | Counts the number of words in a string | `countWords('hello world')` → `2` |
| `countCharacters(str, countWhitespace?)` | Counts characters in a string | `countCharacters('hello world')` → `10` |
| `toCamelCase(str)` | Converts a string to camel case | `toCamelCase('hello-world')` → `'helloWorld'` |
| `toKebabCase(str)` | Converts a string to kebab case | `toKebabCase('helloWorld')` → `'hello-world'` |
| `toSnakeCase(str)` | Converts a string to snake case | `toSnakeCase('helloWorld')` → `'hello_world'` |
| `toTitleCase(str)` | Converts a string to title case | `toTitleCase('hello world')` → `'Hello World'` |
| `generatePassword(length, includeSymbols?)` | Generates a random password | `generatePassword(8, true)` → `'X7!bP3@z'` |

### 🔢 Number Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `getRandomNumber(min, max)` | Generates a random number between min and max | `getRandomNumber(1, 10)` → `Random number between 1 and 10` |
| `getOtp(length?, alphaNumeric?)` | Generates a random OTP | `getOtp(6)` → `'123456'` |
| `countPercentage(part, total, precision?)` | Calculates percentage | `countPercentage(25, 100)` → `25.00` |
| `isEven(number)` | Checks if a number is even | `isEven(4)` → `true` |
| `isOdd(number)` | Checks if a number is odd | `isOdd(3)` → `true` |
| `isPrime(number)` | Checks if a number is prime | `isPrime(7)` → `true` |
| `isPalindrome(number)` | Checks if a number is a palindrome | `isPalindrome(121)` → `true` |
| `isPerfectSquare(number)` | Checks if a number is a perfect square | `isPerfectSquare(16)` → `true` |
| `isPerfectCube(number)` | Checks if a number is a perfect cube | `isPerfectCube(27)` → `true` |
| `square(number)` | Squares a number | `square(5)` → `25` |
| `cube(number)` | Cubes a number | `cube(3)` → `27` |
| `squareRoot(number)` | Calculates the square root of a number | `squareRoot(25)` → `5` |
| `cubeRoot(number)` | Calculates the cube root of a number | `cubeRoot(27)` → `3` |
| `factorial(number)` | Calculates the factorial of a number | `factorial(5)` → `120` |
| `isPowerOfTwo(number)` | Checks if a number is a power of 2 | `isPowerOfTwo(8)` → `true` |
| `isPowerOfThree(number)` | Checks if a number is a power of 3 | `isPowerOfThree(9)` → `true` |
| `roundTo(number, precision)` | Rounds a number to a specific precision | `roundTo(3.14159, 2)` → `3.14` |
| `formatNumberWithSuffix(number, precision)` | Formats a number with metric suffixes (K, M, B, T) | `formatNumberWithSuffix(1500, 1)` → `'1.5K'` |

## 📋 Detailed Documentation

### String Utilities

```typescript
// Capitalize first letter
stringUtils.capitalize('hello');  // 'Hello'

// Capitalize all words
stringUtils.capitalizeWords('hello world');  // 'Hello World'

// Count words
stringUtils.countWords('hello world');  // 2

// Count characters
stringUtils.countCharacters('hello world');  // 10 (without whitespace)
stringUtils.countCharacters('hello world', true);  // 11 (with whitespace)

// Convert to camelCase
stringUtils.toCamelCase('hello-world');  // 'helloWorld'

// Convert to kebab-case
stringUtils.toKebabCase('helloWorld');  // 'hello-world'

// Convert to snake_case
stringUtils.toSnakeCase('helloWorld');  // 'hello_world'

// Convert to title case
stringUtils.toTitleCase('hello world');  // 'Hello World'

// Generate password
stringUtils.generatePassword(8);  // 'Xy7Bcd3z' (without symbols)
stringUtils.generatePassword(8, true);  // 'X7!bP3@z' (with symbols)
```

### Number Utilities

```typescript
// Generate random number
numberUtils.getRandomNumber(1, 100);  // Random number between 1 and 100

// Generate OTP
numberUtils.getOtp();  // '123456' (default 6-digit numeric)
numberUtils.getOtp(4);  // '1234' (4-digit numeric)
numberUtils.getOtp(6, true);  // 'ab3C9z' (alphanumeric)

// Calculate percentage
numberUtils.countPercentage(25, 100);  // 25.00
numberUtils.countPercentage(25, 100, 0);  // 25

// Check number properties
numberUtils.isEven(4);  // true
numberUtils.isOdd(3);  // true
numberUtils.isPrime(7);  // true
numberUtils.isPalindrome(121);  // true
numberUtils.isPerfectSquare(16);  // true
numberUtils.isPerfectCube(27);  // true

// Mathematical operations
numberUtils.square(5);  // 25
numberUtils.cube(3);  // 27
numberUtils.squareRoot(25);  // 5
numberUtils.cubeRoot(27);  // 3
numberUtils.factorial(5);  // 120

// Power checks
numberUtils.isPowerOfTwo(8);  // true
numberUtils.isPowerOfThree(9);  // true

// Formatting
numberUtils.roundTo(3.14159, 2);  // 3.14
numberUtils.formatNumberWithSuffix(1500, 1);  // '1.5K'
numberUtils.formatNumberWithSuffix(1200000, 2);  // '1.20M'
```

## 🖥️ Requirements

- Node.js 14.x or later
- TypeScript 4.x or later (for TypeScript projects)

## 🌐 Browser Compatibility

This package is compatible with modern browsers and Node.js environments.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

ISC © [Bhargav Tibadiya](https://github.com/bhargav-tibadiya)
