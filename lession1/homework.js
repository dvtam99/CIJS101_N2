
// 4
// Sử dụng 
// + Arrow function để nhân đôi giá trị của các phần tử trong một mảng số
// + (Buổi sau) map để nhân đôi giá trị của các phần tử trong một mảng số
// - Input: [1, 2, 3, 4]
// - Output: [2, 4, 6, 8]

// console.log()

const ex4 = (array) => {
    let newArray = []
    array.forEach(element => {
        newArray.push(element * 2)
    });
    return newArray
}
const ex4_02 = (array) => array.map(element => element * 2);

let array = [1, 2, 3, 4]

console.log("Ex4", ex4(array), ex4_02(array))


// 7
// Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];
// - Output: { id: 3, name: "Mark", salary: 3000 }

const employees = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
    { id: 4, name: "Martin", email: "Martin@example.com", workingDays: 22, lateDays: 3, salary: 3000 },
    { id: 5, name: "Tina", email: "Tina@example.com", workingDays: 22, lateDays: 2, salary: 3000 },
];

console.log("EX 7: ");
const ex7 = (listEmp) => {
    let highestSalary = 0, temEmp;
    listEmp.forEach(emp => {
        if (emp.salary >= highestSalary) {
            temEmp = emp
        }
    })

    return temEmp
}
console.log("highestSalary; ", ex7(employees))

// 8
// Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất)
// công = (workingDays - lateDays)
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];
// - Output: { id: 3, name: "Mark", workingDays: 25, lateDays: 1 }

console.log("EX 8: ");
const ex8 = (listEmp) => {
    let highestWorkingDays = 0, temEmp;
    listEmp.forEach(emp => {
        if (emp.workingDays >= highestWorkingDays) {
            temEmp = emp
        }
    })
    return temEmp
}
console.log("highest workingDays; ", ex8(employees))



// 9
// Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];
// - Output: {
//     "John": [
//         { id: 1, name: "John", salary: 2000 },
//         { id: 4, name: "John", salary: 2200 },
//     ],
//     "Jane": [{ id: 2, name: "Jane", salary: 2500 }],
//     "Mark": [{ id: 3, name: "Mark", salary: 3000 }],
// }

const groupEmployeesByName = (employees) => {
    let groupedEmployees = {};
    employees.forEach(employee => {
        if (!groupedEmployees[employee.name]) {
            groupedEmployees[employee.name] = [];
        }
        groupedEmployees[employee.name].push(employee);
    });
    return groupedEmployees;
};


console.log("EX 9: ");
console.log("Grouped Employees: ", groupEmployeesByName(employees));




// 10
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên. 
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.
// hiệu suất = workingDays / salary
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];
// - Output: { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 }

const calculatePerformance = (employees) => {
    let highestPerformance = 0;
    let employeeWithHighestPerformance = null;

    employees.forEach(employee => {
        const performance = employee.workingDays / employee.salary;
        if (performance > highestPerformance) {
            highestPerformance = performance;
            employeeWithHighestPerformance = employee;
        }
    });

    return employeeWithHighestPerformance;
};

console.log("EX 10: ");
console.log("Employee with Highest Performance: ", calculatePerformance(employees));





// 11
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc của nhân viên. Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc là số công làm việc, và số lượng nhân viên nằm trong mốc đó.
// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];
// - Output: {
//     "20": 2,
//     "22": 2,
//     "24": 1
// }

const createHistogram = (employees) => {
    let histogram = {};

    employees.forEach(employee => {
        const workingDays = employee.workingDays;
        if (histogram[workingDays]) {
            histogram[workingDays]++;
        } else {
            histogram[workingDays] = 1;
        }
    });

    return histogram;
};

console.log("EX 11: ");
console.log("Histogram: ", createHistogram(employees));


// 13
// Quản lý danh sách công việc

// Yêu cầu:
// 1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A
// let tasks = [ 
//     { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
//     { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
//     { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
// ];

let tasks = [];

function addTask(name, description) {
    tasks.push({ name, description, completed: false });
}

function completeTask(taskName) {
    tasks = tasks.map(task => {
        if (task.name === taskName) {
            return { ...task, completed: true };
        }
        return task;
    });
}

function sortTasks(order) {
    tasks.sort((a, b) => {
        if (order === "asc") {
            return a.name.localeCompare(b.name);
        } else if (order === "desc") {
            return b.name.localeCompare(a.name);
        }
        return 0;
    });
}
console.log("EX 13: ");
// Example usage:
addTask("Finish JavaScript homework", "Complete the Array and Object exercises");
addTask("Read a book", "Read chapter 4 of the book");
addTask("Buy groceries", "Add more fruits and vegetables to the cart");

console.log(tasks);

completeTask("Read a book");
sortTasks("desc");

console.log(tasks);
