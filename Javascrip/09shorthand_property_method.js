//shorthsand property and method
/*
let name="Champ"
let last="Thammabut"
let age="20"
let username={
    name,last,age
   
}
console.log(username);

*/
//แบบใหม่
function user(name, last, age){
    return{
        name, last, age
    }
}
console.log(user("Natthaphong","Thammabut",25));