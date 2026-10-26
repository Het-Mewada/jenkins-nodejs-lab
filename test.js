
const assert = require('node:assert/strict');

function add(a, b) {
    return a + b;
}
console.log('Webhook-triggered CI test!');
assert.equal(add(2, 3), 5);

console.log('All tests passed!');
