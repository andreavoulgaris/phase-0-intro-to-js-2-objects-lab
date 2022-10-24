// Write your solution in this file!
const employee = {
    name: "value one",
    streetAddress: "value two",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    return {
        ...delete employee.key,
    }
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}