//Destructuring Object
//แบบเดิม

var person={
    name:"Natthaphong",
    skills:"Java C and Python"
};

console.log(person);


/*
var skill=person.skills;
console.log(skill);

var name=person.name;
console.log(name);
console.log(name,skill);
console.log(`name :${name}\nSkill :${skill}`);
*/

//==========================================================================================
//แบบใหม่
var player={
    name:"Champion",
    skill:"Javascrip"
};
let {name,skill}=player;
console.log(`name :${name} Skill :${skill}`);