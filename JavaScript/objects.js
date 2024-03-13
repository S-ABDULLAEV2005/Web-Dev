const person = {
  name: "Shakhzod",
   walk() {
    console.log(this);
   },
   talk() {
    console.log(this)
   }    
};

person.walk();
//person.talk(); 

const walk = person.walk;
walk();
// console.log(walk);

/*person.talk();
person.walk();
//person.name = "Andrey";
console.log(person.name);
const targetMember = 'Bakha'
console.log[targetMember.value] = 'john'
console.log(targetMember.value)*/