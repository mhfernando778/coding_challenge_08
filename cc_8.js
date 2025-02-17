// Task 1 - Employee Salary Calculation //

function calculateSalary(baseSalary, bonus, taxRate) { // starting a function to calculate net salary
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // declaring the equation being used
    return netSalary.toFixed(2); // returning the output with two decimal places
}

console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1)}`); // logging the calculation with given values
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15)}`); // logging the calculation with given values


// Task 2 - Product Price After Discount //

const calculateDiscount = function(price, discountRate) { // starting a function
    let finalPrice = price - (price * discountRate); // delcaring equation being used
    return finalPrice.toFixed(2); // returning the output to two decimal places
}

console.log(`Final Price: $${calculateDiscount(100, 0.2)}`); // logging the calculation with the given values
console.log(`Final Price: $${calculateDiscount(250, 0.15)}`); // logging the calculation with the given values


// Task 3 - Service Fee Calcualtion //

const calculateServiceFee = (amount, serviceType) => amount * serviceType; // starting the arrow function
const serviceType = { // the different service types and the fees for each one
    premium: .15,
    standard: .1,
    basic: .05
};

console.log(`Service Fee: $${calculateServiceFee(200, serviceType.premium).toFixed(2)}`);
console.log(`Service Fee: $${calculateServiceFee(500, serviceType.standard).toFixed(2)}`);