let name = {
name: "Bob",
age: 30,
pet: "dog", 
}
const copy = JSON.parse(JSON.stringify(name));

name.pet = "cat";
copy.name = 'Anna';
console.log(name);
console.log(copy);