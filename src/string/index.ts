/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};


/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - The string to capitalize
 * @returns {string} The capitalized string
 */
export const capitalizeWords = (str: string): string => {
  if (!str) return str;
  return str.split(" ").map(capitalize).join(" ");
};


/**
 * Counts the number of words in a string
 * @param {string} str - The string to count words in
 * @returns {number} The number of words in the string
 */
export const countWords = (str: string): number => {
  if (!str) return 0;
  return str.split(" ").length;
};


/**
 * Counts the number of characters in a string
 * @param {string} str - The string to count characters in
 * @param {boolean} countWhitespace - Whether to count whitespace characters
 * @returns {number} The number of characters in the string
 */
export const countCharacters = (str: string, countWhitespace: boolean = false): number => {
  if (!str) return 0;
  return countWhitespace ? str.length : str.replace(/\s/g, "").length;
};


/**
 * Converts a string to camel case
 * @param {string} str - The string to convert to camel case
 * @returns {string} The camel case string
 */
export const toCamelCase = (str: string): string => {
  if (!str) return str;
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
};


/**
 * Converts a string to kebab case
 * @param {string} str - The string to convert to kebab case
 * @returns {string} The kebab case string
 */
export const toKebabCase = (str: string): string => {
  if (!str) return str;
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
};


/**
 * Converts a string to snake case
 * @param {string} str - The string to convert to snake case
 * @returns {string} The snake case string
 */
export const toSnakeCase = (str: string): string => {
  if (!str) return str;
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};


/**
 * Converts a string to title case
 * @param {string} str - The string to convert to title case
 * @returns {string} The title case string
 */
export const toTitleCase = (str: string): string => {
  if (!str) return str;
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};


/**
 * Generates a password with a specific length
 * @param {number} length - The length of the password
 * @param {boolean} includeSymbols - Whether to include symbols in the password
 * @returns {string} The generated password
 */
export const generatePassword = (length: number, includeSymbols: boolean = false): string => {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (includeSymbols) {
    charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};