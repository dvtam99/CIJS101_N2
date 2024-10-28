// Spread Operator


let name= "dat"
let person={name:"Dat", age:20}
let classMath={nameClass:"math", grade:8}
//person = name:"Dat", age:20, classMath:{nameClass:"math", grade:8}, nameClass:"math", grade:8
// console.log(name);
// console.log(person, person.name, classMath.nameClass);
// person = {...person,...classMath }
// console.log(person);



// const arr1 = [1,2,3,4]
// const arr2 = [4,5,6]

// console.log([...arr1, ...arr2])


function sum(num1, num2) {
    return num1 + num2
}

function sumInfiniti(...num){
    let sum = 0;
    num.forEach(el => {
        sum+= el
    });
    return sum

}

console.log("Sum result:",sum(1))
console.log("sumInfiniti result:",sumInfiniti(1,6, 83,5693,81378,381))

function getNameOfClass(obj){
    let {grade, nameClass}= obj
    // return nameClass
    return obj.nameClass

}

console.log(getNameOfClass(classMath))
