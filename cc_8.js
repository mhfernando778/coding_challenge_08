// Task 1 - Employee Salary Calculation //

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return netSalary.toFixed(2);
}

console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1)}`);
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15)}`);