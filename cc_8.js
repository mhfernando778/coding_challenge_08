// Task 1 - Employee Salary Calculation //

function calculateSalary(baseSalary, bonus, taxRate) { // starting a function to calculate net salary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // declaring the equation being used
    return netSalary.toFixed(2); // returning the output with two decimal places
}

console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1)}`); // logging the calculation with given values
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15)}`); // logging the calculation with given values


// Task 2 - Product Price After Discount //

let calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return finalPrice.toFixed(2);
}

console.log(`Final Price: $${calculateDiscount(100, 0.2)}`);
console.log(`Final Price: $${calculateDiscount(250, 0.15)}`);