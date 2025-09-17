/**
 * Converts a given string to camelCase format.
 *
 * The function takes a string with words separated by spaces and converts it to camelCase.
 * The first word is in lowercase, and each subsequent word starts with an uppercase letter.
 *
 * @param {string} str - The input string to convert. Must be a non-empty string without numerical characters.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is not a non-empty string.
 * @throws {TypeError} If the input contains numerical characters.
 *
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('JavaScript is awesome'); // returns 'javaScriptIsAwesome'
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function takes a string with words separated by spaces and converts it to dot.case,
 * where all words are in lowercase and separated by dots.
 *
 * @param {string} str - The input string to convert. Must be a non-empty string without numerical characters.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is not a non-empty string.
 * @throws {TypeError} If the input contains numerical characters.
 *
 * @example
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('JavaScript is awesome'); // returns 'javascript.is.awesome'
 */
// refined_prompt.js
// This file was created as requested.
function toCamelCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new Error('Input must be a non-empty string');
    }
    if (/\d/.test(str)) {
        throw new TypeError('Input must not contain numerical characters');
    }
    const words = str.split(' ');
    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.charAt(0).toLowerCase() + word.slice(1);
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

function toDotCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new Error('Input must be a non-empty string');
    }
    if (/\d/.test(str)) {
        throw new TypeError('Input must not contain numerical characters');
    }
    return str
        .trim()
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('.');
}
