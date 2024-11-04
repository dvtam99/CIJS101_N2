const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
// 1---- accumulator1 = accumulator0 + currentValue1 =(0+1) = 1, currentValue1 = array1[1] = 1
// 2---- accumulator2 = accumulator1 + currentValue1 =(1+2) = 3, currentValue2 = array1[1] = 3
// 3---- accumulator3 = accumulator2 + currentValue2 =(1+2) = 4, currentValue = array1[2] = 6
// 4---- accumulator4 = accumulator3 + currentValue3 =(4+3), currentValue = array1[2] = 10

const employeesCountDay = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
];

const countWork = employeesCountDay.reduce((workDay,currentEmp) => {
    console.log(currentEmp, workDay, workDay[currentEmp.workingDays])
    workDay[currentEmp.workingDays] = (workDay[currentEmp.workingDays] || 0) + 1;
    return workDay;
}, {})

console.log(countWork)


//0 - {} ,  { id: 1, name: "John", workingDays: 20 } => {20:1}
//1 - {20:1} ,  { id: 2, name: "Jane", workingDays: 22 }, => {20:1, 22:1}
//2 - {20:1, 22:1} ,   { id: 3, name: "Mark", workingDays: 20 }, =>{20:2, 22:1}
//3 -  ={20:2, 22:1} ,  { id: 4, name: "Sam", workingDays: 24 },=>{20:2, 22:1, 24:1} 
//4 - {} ,  { id: 1, name: "John", workingDays: 20 } => {20:1}

