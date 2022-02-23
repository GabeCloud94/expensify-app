export default (expenses) =>
  expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
  }, 0);
