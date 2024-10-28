// Tạo một arrow function để tính bình phương của một số
//  - Input: 4
//  - Output: square(4) -> 16

// ex1
const square = (num) => {
    return num * num
}

console.log("EX1:", square(8))

// ex2: 2
// Viết một arrow function để kiểm tra xem một chuỗi có chứa một từ khóa cụ thể hay không
// - Input: Chuỗi: "Hello world!", Từ khóa: "world"
// - Output: function(‘Hello world’, ’world’) -> true

const searchString = (string, keyWord) => {
    // cat chuoi string =>mang
    // loop mang =>tim key
    const slipStringArr = string.split(" ")
    return !!slipStringArr.find(el => el === keyWord)
    // let res =  slipStringArr.find(el=>el === keyWord)
    // if(res){
    //     return true
    // }else return false

}
const string = "Hello world!"
const keyWord1 = "world"
const string2 = "Hello world"

console.log("EX 2:")
console.log("string: `", string, "`, keyWord1:", keyWord1, ", result:", searchString(string, keyWord1))
console.log("string: `", string2, "`, keyWord1:", keyWord1, ", result:", searchString(string2, keyWord1))



// 3
// Viết arrow function thêm một tiền tố vào mỗi phần tử của một mảng chuỗi
// - Input: Mảng chuỗi: ["one", "two", "three"], Tiền tố: "number: "
// - Output: function(["one", "two", "three"], ’number’) 
//             -> ["number: one", "number: two", "number: three"]

console.log("EX 3:")

const addToString = (arr, prefix) => {
    console.log("arr brefore: ", arr)
    let newArr = []
    arr.forEach(ele => {
        // ele = prefix + ele
        ele = prefix + ele
        // console.log(ele);
        newArr = [...newArr, ele]
        // 1 
        // 2
    });

    // for
    console.log("arr after: ", newArr)
}

addToString(["one", "two", "three"], "number :")


// 5
// Sử dụng
// + Arrow function để lấy ra các phần tử là số lẻ từ một mảng
// + (Buổi sau) filter để lấy ra các phần tử là số lẻ từ một mảng
// - Input: [1, 2, 3, 4, 5, 6]
// - Output: [1, 3, 5]
console.log("EX 5:")
const findOddNumber =(array)=>{
    let oddArray = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element%2 === 1){
            oddArray.push(element)
        }
        
    }
    // console.log(oddArray);
    return oddArray

}
const arrayEx5 = [1, 2, 3, 4, 5, 6,19, 3, 8, 0, 6]
console.log("raw array:", arrayEx5, "odd array:", findOddNumber(arrayEx5))


// 6
// Tính tổng số công làm việc của các nhân viên

// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// - Output: 67




// 12
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về tên, email, số công làm việc, số công đi làm muộn, và mức lương của nhân viên. Tạo một danh sách các đối tượng mới trong đó mỗi đối tượng chứa tên nhân viên, email và thông tin tổng hợp về số công làm việc và đi làm muộn dưới dạng một object con.

// const employees = [
//     { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
// ];


// - Output: [
//     {
//         name: "John",
//         email: "john@example.com",
//         workInfo: { workingDays: 22, lateDays: 2 }
//     },
//     {
//         name: "Jane",
//         email: "jane@example.com",
//         workInfo: { workingDays: 20, lateDays: 0 }
//     },
//     {..
//         name: "Mark",
//         email: "mark@example.com",
//         workInfo: { workingDays: 25, lateDays: 1 }
//     }
// ]


console.log("EX 12: ");
const handelEMPInfo=(listEmp)=>{

    let newListEmp = [], totalSalary = 0, totalWokingDays = 0

    listEmp.forEach(emp =>{
       const { id, name, email, workingDays, lateDays, salary } = emp
        newListEmp = [...newListEmp, {name, email, workinginfo :{workingDays, lateDays}}]
        totalSalary += salary
        totalWokingDays +=workingDays 
        // totalSalary = totalSalary + salary

    })

    return{newListEmp, totalSalary, totalWokingDays}

}

const employees = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];

let {newListEmp, totalSalary} = handelEMPInfo(employees)
console.log("newListEmp", newListEmp, "totalSalary", totalSalary, "totalWokingDays: ",  handelEMPInfo(employees).totalWokingDays)








