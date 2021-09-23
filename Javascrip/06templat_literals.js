//Template literals  การต่อ string
//แบบเดิม

const name = "champ"
const last = "Thammabut"
const city = 'Surin'

const all = "Nmae :" + name + " Lastname :" + last + " City :" + city
    console.log(all);
const newall = "Nmae :" + name + "\nLast :"+ last + "\nCity :"+ city
    console.log(newall);
//=====================================================================================================================
//แบบใหม่
console.log("---New String---");
const allname=`Name=${name} Last=${last} city=${city}`
    console.log(allname);
const allname2=`Name=${name} 
Last=${last} 
city=${city}`
    console.log(allname2);