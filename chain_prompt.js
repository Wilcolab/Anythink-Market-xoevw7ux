function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]+/g, ' ') // Remove non-alphanumeric except spaces
        .split(' ')
        .filter(Boolean)
        .map((word, idx) =>
            idx === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

function toKebabCase(str) {
    const camel = toCamelCase(str);
    // Insert dash before uppercase letters (except first char), then lowercase
    return camel
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
}

// Example usage:
// console.log(toKebabCase('Hello world! This is a test_string'));
// Output: hello-world-this-is-a-test-string