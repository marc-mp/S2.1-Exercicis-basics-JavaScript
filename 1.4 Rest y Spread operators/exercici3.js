
let objecte1 = {marca: "Ford", modelo: "Mustang", año: 1969,};
let objecte2 = {...objecte1};
console.log(objecte2)

objecte2["año"] = 2000;
console.log(objecte2)

console.log(objecte1)

