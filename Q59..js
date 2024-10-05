const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));

//answer B: { name: "Lydia", age: 21 }, ["name"]