let chars = new Set(["a", "a", "b", "c", "c"]);
console.log(chars);
chars.add("d");
console.log(chars);

let searchChar = chars.has("a");
console.log(searchChar);

chars.delete("b");
console.log(chars);

chars.clear();
console.log(chars);

let roles = new Set();
roles.add("Admin").add("Editor");

roles.forEach((role) => console.log(role));
