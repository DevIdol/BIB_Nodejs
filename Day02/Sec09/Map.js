let joe = { name: "Joseph" };
let mice = { name: "Michael" };

const userRoles = new Map([
  [joe, "Amdin"],
  [mice, "Editor"],
]);

userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));

let keys = [...userRoles.keys()];
console.log(keys);

let roles = [...userRoles.values()];
console.log(roles);

userRoles.delete(mice);
keys = [...userRoles.keys()];
console.log(keys);
userRoles.clear();
console.log(userRoles.size); 