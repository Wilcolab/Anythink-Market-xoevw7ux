// chain_prompt.js
// This file was created as requested.
function transformString(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Input string is empty');
    }
    let result = input.replace(/\s+/g, ' ').trim();
    result = result.toLowerCase().replace(/ /g, '-');
    result = result.padEnd(10, ' ');
    return result;
}