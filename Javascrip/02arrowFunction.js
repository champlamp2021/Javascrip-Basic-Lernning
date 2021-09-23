console.log("____________________________");
console.log("###----Arrow Function----###");
console.log("____________________________");

//function ปกติ  เช่น
//function เพื่อบวกเลข 2 จำนวน
console.log("EX1");
function sorwor(a, b) {
    console.log("ค่าของ a ที่รับข้อมูลเข้ามา =", a);
    console.log("ค่าของ b ที่รับข้อมูลเข้ามา =", b);
    return a + b
}
//เรียกใช้ function
let result = sorwor(50, 30);
console.log("ผลรวมของเลข 2 จำนวน =", result);
console.log("____________________________");


//Ex2.Arrow function  
//แบบที่ 1 มีปีกกา กรณีที่มีคำสั่งมากกว่า 1 
//มีการ  return ค่า
console.log("Ex2.Arrow function");
const sum = (c, d) => {
    console.log("Processing...", c, "+", d);
    return c + d;
}
let total = sum(20, 30);
console.log("=", total);
console.log("_______________________________");

//แบบที่ 2 ไม่มีปีกกา เช่น
const sum3 = (e) => e + 100; //function sum3  return ค่าไปให้ total3 
let total3 = sum3(1); // total3 เรียกใช้  function sum3 ส่งค่า parameter ค่า=1 ไปยัง function เพื่อคำนวนหาค่า
console.log("summation", total3);//แสดงผลรวมที่คำนวนได้
console.log("_______________________________");


//Return Object
console.log("return Object");
const student = name => ({
    name: name,
    age: 25
});
let resultObject =student("natthaphong")
console.log(resultObject);