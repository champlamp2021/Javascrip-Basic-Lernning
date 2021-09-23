//แบบใหม่  การสร้าง class
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    SayHi(){
        console.log("hello = "+this.name +" Age = "+this.age);
    }
}
let user1=new User("Natthaphong",25);//สร้างตัวแปรใหม่ชื่อ  user1 เพื่อส่งข้อมูลไปใช้บน class User
user1.SayHi();



/*
//แบบเดิม
var user={
    name:"Natthaphong",
    age:25,
    sayHi:function(){
        return "Hello ="+this.name
    }
};
//user.sayHi()  //เรียกใช้ function sayHi ที่  user
console.log(user.sayHi());
*/

