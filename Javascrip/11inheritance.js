//------การสืบทอดคุณสมบัติ  ระหว่าง class

class Admin({
    console.log("Read  Write Data From  Database");
})




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