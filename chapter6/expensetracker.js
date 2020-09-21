const account = {
name: 'Maxim',
expenses: [],
addExpense: function(description, amount) {
            account.expenses.unshift({description,amount})},
getAccountSummary: function()  {
let total = 0;
this.expenses.forEach(function(expense) {
total = expense.amount + total;
})
return `${this.name} has ${total} in expenses`
}
}

//Expense
//1. A description
//2. Amount

//2methods on account
//1. add expense --> 2 arguments, description and expense
//2. get account summary --> get all expenses

account.addExpense('Rent',950)
console.log(account.expenses);
account.addExpense('Coffee',2)
console.log(account.expenses);
console.log(account.getAccountSummary())
