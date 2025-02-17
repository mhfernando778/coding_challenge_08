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

console.log(`Service Fee: $${calculateServiceFee(200, serviceType.premium).toFixed(2)}`); // logged the calculation with givven values
console.log(`Service Fee: $${calculateServiceFee(500, serviceType.standard).toFixed(2)}`); // logged the calculation with givven values


// Task 4 - Car Rental Cost Calculation //

const carType = { // stating the daily rental prices
    economy: 40,
    standard: 60,
    luxury: 100
};

function calculateRentalCost(days, carType, insurance = false) { // starting a function
    let cost = days * carType + (insurance ? days * 20 : 0); // declaring the equation being used
    return cost.toFixed(2); // returning the output to two decimal places
}

console.log(`Total Rental Cost: $${calculateRentalCost(3, carType.economy, true)}`); // logging the calculation with the given values
console.log(`Total Rental Cost: $${calculateRentalCost(5, carType.luxury, false)}`); // logging the calculation with the given values


// Task 5 - Loan Payment Calculation //

function calculateLoanPayment(principal, rate, time) { // starting function
    let totalPayment = principal + (principal * rate * time); // declaring what equation will be used
    return totalPayment.toFixed(2); // return the output to two decimal places
  }
 
  console.log(`Total Interest: $${calculateLoanPayment(1000, .05, 2)}`); // logging the calculation with the given values
  console.log(`Total Interest: $${calculateLoanPayment(5000, .07, 3)}`); // logging the calculation with the given values


// Task 6 - Identifying Large Transaction // 

let transactions = [200, 1500, 3200, 800, 2500]; // an array of 5 values

function filterLargeTransactions(transactions, filterFunction) { // starting function
    return transactions.filter(filterFunction);
}
let highValueTransactions = filterLargeTransactions(transactions, amount => amount > 1000); // declaring the parameters

console.log(`High-Value Transactions: ${highValueTransactions}`); // logging the expected values


// Task 7 - Shopping Cart Tracker //

function createCartTracker() { // starting the function
   let cart = 0;
   return function(amount) {
      cart += amount; // adding to the first function
      return `$${cart}`;
   };
 }
 let total = createCartTracker();

 console.log(`Current Balance: ${total(20)}`); // logging with the given value
 console.log(`Current Balance: ${total(35)}`); // logging with the given value


 // Task 8 - Savings Growth Projection //

 function calculateSavings(years, amount) { // starting function to calculate projected savings
    if (years >= 10) return amount;
    return calculateSavings(years + 1, amount * 1.05);
}

console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`); // logging the calculation
console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`); // logging the calculation