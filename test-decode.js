// Test: try to reverse double-UTF8 encoding
const garbled = 'æ¬§å\u0085ƒçº¸å¸è®¾è®¡';
console.log('garbled:', garbled);

// Each garbled char is a Latin-1 codepoint that was re-encoded as UTF-8
// To reverse: get each char's codepoint as a byte, then decode those bytes as UTF-8
const bytes = Buffer.from(garbled, 'latin1');
const decoded = bytes.toString('utf8');
console.log('decoded:', decoded);
