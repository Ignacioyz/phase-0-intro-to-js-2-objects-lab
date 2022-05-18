// // Write your solution in this file!
// const employee = {
//     name: 'Ben',
//     streetAddress: '11 Broadway'
// }

// delete employee.key


// function updateEmployeeWithKeyAndValue(employee, key, value){
//     const newEmployee = {...employee}
//      newEmployee[key] = value
//      return newEmployee
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//    employee[key]= value 
//    return employee
// }

// function deleteFromEmployeeByKey(employee, key){
//     let newEmployee2 = {...employee}
//     delete newEmployee2[key]
//     return newEmployee2

// }

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key]
//     return employee
// }




// To start, define a employee variable and assign it to an Object containing name 
// and streetAddress keys; you can use whatever values you like. Use literal syntax to 
// create your Object. Various updates will be applied to this variable 
// (destructively and non-destructively) in this lab.


const employee = {
    name: 'Tremelle',
    streetAddress: '1 Park Place',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, name: 'Sam', streetAddress: '11 Broadway' }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let copy = {...employee}
    delete copy[key]
    return copy
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}