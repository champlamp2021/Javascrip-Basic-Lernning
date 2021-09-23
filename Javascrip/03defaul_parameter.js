//Default Parameter
const addUser=(name,last,city="-กรุณาระบุจังหวัด-")=>{    //function addUser
    return name + last+"city ="+city;  
}
console.log(addUser("Champ","Thammabut","Surin"));
console.log(addUser("Nany","Namyong"));