let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);

//answer D: [{ name: "Lydia" }]