/* Block Scop and Variable
ประเภทของตัวแปร
1.Global  Variable  -->ทำงานในตัวโปรแกรมทั้งหมด
2.Local Variable -> block scop  ขอบเขตของตัวแปร  --> จะทำงานภายใต้ block
*/
//------------------------------------------------------------------
console.log("****Ex1 basic****");
var  price=20
//defile
var fruit="ม่วง"
if(price===20){
        var  fruit="ส้มโอ"
        console.log(fruit);
}
console.log(fruit);
console.log("--------------------------------------------------");
    /*ผลลัพธ์ ได้เท่ากับ
        =ส้มโอ
        =ส้มโอ
    */

//Ex.2 chang variable
console.log("****Ex.2 chang variable****");
let  price2=10
let fruit2="มะม่วง"
if(price2==10){
    let  fruit2="ส้มโอ"
        console.log("in block",fruit2);
}
console.log("Out block",fruit2);
console.log("--------------------------------------------------");
 /*ผลลัพธ์ ได้เท่ากับ
        =ส้มโอ
        =มะม่วง
    */
console.log("____ex.3 ค่าคงที่_____");
const person={name: 'champ',last:'Lamp'}
person.name="natthaphong"  //เปลี่ยนชื่อในตัวแปร person ค่าของ name เป็น natthaphong
console.log(person); 
console.log("--------------------------------------------------");
