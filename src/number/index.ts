/**
 * Capitalizes the first letter of a string
 * @param {number} min - The minimum number
 * @param {number} max - The maximum number
 * @returns {number} The random number
 */
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


/**
 * Get a random OTP
 * @param {number} length - The length of the OTP
 * @param {boolean} alphaNumeric - Whether the OTP should be alphanumeric
 * @returns {string} The OTP
 */
export const getOtp = (length: number = 6, alphaNumeric: boolean = false): string => {
  const characters = alphaNumeric ? '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' : '0123456789';
  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};


/**
 * Count the percentage of a part of a total
 * @param {number} part - The part of the total
 * @param {number} total - The total
 * @param {number} precision - The precision of the percentage
 * @returns {number} The percentage
 */
export const countPercentage = (part: number, total: number, precision: number = 2): number => {
  return Number(((part / total) * 100).toFixed(precision));
};


/**
 * Check if a number is even
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is even
 */
export const isEven = (number: number): boolean => {
  return number % 2 === 0;
};


/**
 * Check if a number is odd
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is odd
 */
export const isOdd = (number: number): boolean => {
  return number % 2 !== 0;
};


/**
 * Check if a number is prime
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is prime
 */
export const isPrime = (number: number): boolean => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
};


/**
 * Check if a number is a palindrome
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is a palindrome
 */
export const isPalindrome = (number: number): boolean => {
  const str = number.toString();
  return str === str.split('').reverse().join('');
};


/**
 * Check if a number is a perfect square
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is a perfect square
 */
export const isPerfectSquare = (number: number): boolean => {
  return Number.isInteger(Math.sqrt(number));
};


/**
 * Check if a number is a perfect cube  
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is a perfect cube
 */
export const isPerfectCube = (number: number): boolean => {
  return Number.isInteger(Math.cbrt(number));
};


/**
 * Square a number
 * @param {number} number - The number to square
 * @returns {number} The squared number
 */
export const square = (number: number): number => {
  return number * number;
};


/**
 * Cube a number
 * @param {number} number - The number to cube
 * @returns {number} The cubed number
 */
export const cube = (number: number): number => {
  return number * number * number;
};


/**
 * Square root a number
 * @param {number} number - The number to square root
 * @returns {number} The square rooted number
 */
export const squareRoot = (number: number): number => {
  return Math.sqrt(number);
};


/**
 * Cube root a number 
 * @param {number} number - The number to cube root
 * @returns {number} The cube rooted number
 */
export const cubeRoot = (number: number): number => {
  return Math.cbrt(number);
};


/**
 * Factorial a number
 * @param {number} number - The number to factorial
 * @returns {number} The factorialed number
 */
export const factorial = (number: number): number => {
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
};


/**
 * Check if a number is a power of 2
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is a power of 2
 */
export const isPowerOfTwo = (number: number): boolean => {
  return (number & (number - 1)) === 0;
};


/**
 * Check if a number is a power of 3
 * @param {number} number - The number to check
 * @returns {boolean} Whether the number is a power of 3
 */
export const isPowerOfThree = (number: number): boolean => {
  return (number & (number - 1)) === 0;
};


/**
 * Round a number to a specific precision
 * @param {number} number - The number to round
 * @param {number} precision - The precision to round to
 * @returns {number} The rounded number
 */
export const roundTo = (number: number, precision: number): number => {
  return Number(number.toFixed(precision));
};


/**
 * Formats a number into a string with metric suffixes (K, M, B, T)
 * and rounds it to a specific precision.
 * K = Thousand (1e3), M = Million (1e6), B = Billion (1e9), T = Trillion (1e12).
 *
 * @param {number} number - The number to format.
 * @param {number} precision - The number of decimal places to show (non-negative integer).
 * @returns {string} The formatted number string (e.g., "12.50K", "1.235M", "500.00").
 */
export const formatNumberWithSuffix = (number: number, precision: number): string => {
  if (!isFinite(number) || isNaN(number)) {
    return number.toString();
  }

  const resolvedPrecision = Math.max(0, Math.floor(precision));

  const tiers = [
    { threshold: 1e12, divisor: 1e12, suffix: 'T' },
    { threshold: 1e9, divisor: 1e9, suffix: 'B' },
    { threshold: 1e6, divisor: 1e6, suffix: 'M' },
    { threshold: 1e3, divisor: 1e3, suffix: 'K' },
    { threshold: 0, divisor: 1, suffix: '' }
  ];

  const absNumber = Math.abs(number);
  const tier = tiers.find(t => absNumber >= t.threshold);

  if (!tier) {
    return number.toFixed(resolvedPrecision);
  }

  if (number === 0) {
    return number.toFixed(resolvedPrecision);
  }

  const scaledNumber = number / tier.divisor;
  const formattedNumber = scaledNumber.toFixed(resolvedPrecision);
  return formattedNumber + tier.suffix;
};