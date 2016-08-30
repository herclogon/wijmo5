// simple JS object to represent an expense
// this is used when creating a new expense
function Expense(title, amount, date, description, categoryId) {
    // also has ID - to be set when inserting
    this.title = title;
    this.amount = amount;
    this.date = date;
    this.description = description;
    this.categoryId = categoryId;
}