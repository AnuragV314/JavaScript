import message from "./message.js";

text = message();
console.log(text);

// Note :
// Modules only work with the HTTP(s) protocol.

// A web-page opened via the file:// protocol cannot use import / export.
