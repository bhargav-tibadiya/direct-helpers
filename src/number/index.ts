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