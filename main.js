

const name= "Gosia";
const age= 31;

console.log(name);
console.log(age);

console.log(`My name is ${name} and I am ${age} years old`);

const coder= document.querySelector(".work__heading--js");

coder.innerHTML = "My code";

function hello(name, age){
return `Goodbye, ${name},${age}!`
};

console.log(hello("Maciek",34));