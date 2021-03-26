// Write your solution in this file!
const employee = {
    name: 'Sophie',
    streetAddress: '5100 California'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeNew = {...employee};
    employeeNew[key] = value;
    return employeeNew
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

