

const name= "Gosia";
const age= 31;

console.log(name);
console.log(age);

console.log(`My name is ${name} and I am ${age} years old`);

function hello(name, age){
return `Goodbye, ${name},${age}!`
};

console.log(hello("Maciek",34));

const navigationSwitcher = document.querySelector(".navigation__switcher--js");

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});