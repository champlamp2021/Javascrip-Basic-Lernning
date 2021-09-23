//Rest  Operator  การเข้าถึงพารามิเตอร์ของฟังก์ชัน
//สัญลักษณ์ของ  Rest  Operator "..." เป็นการส่งค่าอาเรย์เข้าไปทำงาน
const addUser = (name, last, ...city) => {
    return name + " " + last + " " + city;
}
console.log(addUser("Champ", "Thammabut", "Surin"));
console.log(addUser("Champ", "Thammabut", "Surin", "Chonburi"));
console.log(addUser("Champ", "Thammabut", "Surin", "Chonburi", "Bangkok"));

//______________________________________________________________________________________
const addMessage = (first, ...message) => {
    return message.map(m => first + message)
}

console.log(addMessage("Hello", "Natthaphong", "you Learning Javascip"));

const addNumber=(...number) => {
    return number.reduce((first, current) => {
        return first + current
    })
}
console.log("Function addNumber=",addNumber(1,2,3,4,5));