// Spread Operator -เป็นการกระจายค่าจากอาเรย์ a ไปยังอาเรย์  b

//Array
let  fruit=['มะม่วง','แตงโม'];
console.log(fruit);
let newFruit=[... fruit,'ทุเรียน','มังคุด'];
console.log(newFruit);
let food=[... fruit,'ต้มยำ','ผัดกะเพรา','ข้าวไข่เจียว'];
console.log(food);
let allfood=[... newFruit,... food];
console.log(allfood);

//Object
let product={name:'ทุเรียน',price:200}
console.log(product);
let newProduct={... product,category:'ผลไม้'}//insert data product
console.log(newProduct);//show data newproduct
//update price data newProduct
let newPrice={... newProduct,price:500}
console.log(newPrice);