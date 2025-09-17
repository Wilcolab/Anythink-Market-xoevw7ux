function toCamelCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/[_\s]+(.)?/g, (match, chr, index) =>
            chr ? chr.toUpperCase() : ''
        );
}

// Example usage:
// console.log(toCamelCase(" first_name")); // Output: "firstName"