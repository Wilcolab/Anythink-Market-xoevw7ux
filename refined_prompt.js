/**
 * Converts a string to camelCase format.
 *
 * Handles input strings containing spaces, underscores, hyphens, and mixed cases.
 * The function trims leading and trailing whitespace and separators, splits the string into words,
 * and converts it to camelCase (first word in lowercase, subsequent words capitalized).
 * 
 * Throws an error if the input is not a string, is empty after trimming, contains only numbers or symbols,
 * or contains invalid characters (non-alphanumeric).
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If the input string is empty after trimming.
 * @throws {Error} If the input contains only numbers or symbols.
 * @throws {Error} If the input contains invalid characters or symbols.
 * @returns {string} The camelCase formatted string.
 * 
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 */

/**
 * Converts a string to dot.case format.
 *
 * Handles input strings containing spaces, underscores, hyphens, and mixed cases.
 * The function trims leading and trailing whitespace and separators, splits the string into words,
 * and converts it to dot.case (all words in lowercase, joined by dots).
 * 
 * Throws an error if the input is not a string, is empty after trimming, contains only numbers or symbols,
 * or contains invalid characters (non-alphanumeric).
 *
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If the input string is empty after trimming.
 * @throws {Error} If the input contains only numbers or symbols.
 * @throws {Error} If the input contains invalid characters or symbols.
 * @returns {string} The dot.case formatted string.
 * 
 * @example
 * toDotCase('First name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 */
function toCamelCase(str) {
	if (typeof str !== 'string') {
		throw new Error('Input must be a string.');
	}

	// Trim whitespace and separators
	let trimmed = str.trim().replace(/^[_\-\s]+|[_\-\s]+$/g, '');

	if (!trimmed) {
		throw new Error('Input string is empty after trimming.');
	}

	// Check for invalid input: only numbers or only symbols
	if (/^[\d\W_]+$/.test(trimmed)) {
		throw new Error('Input contains only numbers or symbols, which is not allowed.');
	}

	// Split by space, underscore, or hyphen
	const words = trimmed
		.split(/[\s_\-]+/)
		.map(w => w.trim())
		.filter(Boolean);

	// Check for invalid words (numbers or symbols out of scope)
	for (const word of words) {
		if (!/^[a-zA-Z0-9]+$/.test(word)) {
			throw new Error('Input contains invalid characters or symbols.');
		}
	}

	// Lowercase the first word, capitalize the rest
	return words
		.map((word, idx) => {
			word = word.toLowerCase();
			if (idx === 0) return word;
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join('');
}

// Example usage:
console.log(toCamelCase('irst name')); // firstName
console.log(toCamelCase('user_id')); // userId
console.log(toCamelCase('SCREEN_NAME')); // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber
// toCamelCase('1234') // Throws error
// toCamelCase('!@#') // Throws error

/**
 * Converts a string to dot.case.
 * Handles spaces, underscores, hyphens, and mixed cases.
 * Throws errors for invalid input (numbers only, special symbols, empty, etc).
 * Trims leading/trailing whitespace and separators.
 * 
 * @param {string} str
 * @returns {string}
 */
function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }

    let trimmed = str.trim().replace(/^[_\-\s]+|[_\-\s]+$/g, '');

    if (!trimmed) {
        throw new Error('Input string is empty after trimming.');
    }

    if (/^[\d\W_]+$/.test(trimmed)) {
        throw new Error('Input contains only numbers or symbols, which is not allowed.');
    }

    const words = trimmed
        .split(/[\s_\-]+/)
        .map(w => w.trim())
        .filter(Boolean);

    for (const word of words) {
        if (!/^[a-zA-Z0-9]+$/.test(word)) {
            throw new Error('Input contains invalid characters or symbols.');
        }
    }

    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
console.log(toDotCase('First name')); // first.name
console.log(toDotCase('user_id')); // user.id
console.log(toDotCase('SCREEN_NAME')); // screen.name
console.log(toDotCase('mobile-number')); // mobile.number
// toDotCase('1234') // Throws error
// toDotCase('!@#') // Throws error