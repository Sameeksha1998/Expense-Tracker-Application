let expenses = [
    {
      "id": "1",
      "date": "2024-01-01",
      "description": "Grocery Shopping",
      "amount": 50.75,
      "category": "Food"
    },
    {
      "id": "2",
      "date": "2024-01-03",
      "description": "Bus Ticket",
      "amount": 2.5,
      "category": "Transport"
    },
    {
      "id": "3",
      "date": "2024-01-05",
      "description": "Electricity Bill",
      "amount": 80.0,
      "category": "Utilities"
    },
    {
      "id": "4",
      "date": "2024-01-07",
      "description": "Lunch at Restaurant",
      "amount": 15.0,
      "category": "Food"
    },
    {
      "id": "5",
      "date": "2024-01-10",
      "description": "Gas",
      "amount": 40.0,
      "category": "Transport"
    },
    {
      "id": "6",
      "date": "2024-01-12",
      "description": "Internet Bill",
      "amount": 60.0,
      "category": "Utilities"
    }
  ];
    
  exports.getExpenses = () => {
    return expenses;
  };
  
  exports.addExpense = (expense) => {
    expenses.push(expense);
  };
  
  exports.updateExpense = (id, updatedData) => {
    const expenseIndex = expenses.findIndex(expense => expense.id === id);
    if (expenseIndex === -1) return null;
  
    expenses[expenseIndex] = { ...expenses[expenseIndex], ...updatedData };
    return expenses[expenseIndex];
  };
  
  exports.deleteExpense = (id) => {
    const expenseIndex = expenses.findIndex(expense => expense.id === id);
    if (expenseIndex === -1) return null;
  
    return expenses.splice(expenseIndex, 1)[0];
  };
  
  // Function to find potential duplicate expenses
  exports.findDuplicateExpense = (newExpense) => {
    return expenses.find(expense => {
      return (
        expense.date === newExpense.date &&
        expense.amount === newExpense.amount &&
        expense.category === newExpense.category &&
        isDescriptionSimilar(expense.description, newExpense.description)
      );
    });
  };
  
  // Simple function to check if two descriptions are similar
  function isDescriptionSimilar(desc1, desc2) {
    return desc1.toLowerCase().includes(desc2.toLowerCase()) || desc2.toLowerCase().includes(desc1.toLowerCase());
  }
  
  // Simple validation function
  exports.validateExpense = (expense) => {
    if (!expense.amount || !expense.category || !expense.date) {
      return { isValid: false, message: "Amount, category, and date are required." };
    }
    return { isValid: true };
  };
  