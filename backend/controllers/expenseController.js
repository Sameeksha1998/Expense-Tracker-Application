const expenseService = require('../services/expenseService');

// POST endpoint to create a new expense
exports.createExpense = (req, res) => {
  const newExpense = req.body;

  // Validate the expense data
  const validation = expenseService.validateExpense(newExpense);
  if (!validation.isValid) {
    return res.status(400).json({ error: validation.message });
  }

  // Check for potential duplicates before adding the new expense
  const duplicateExpense = expenseService.findDuplicateExpense(newExpense);
  if (duplicateExpense) {
    return res.status(409).json({
      message: "Potential duplicate expense detected",
      duplicateExpense: duplicateExpense
    });
  }

  // Add the new expense to the in-memory array
  newExpense.id = (expenseService.getExpenses().length + 1).toString();  // Auto-generate ID
  expenseService.addExpense(newExpense);
  res.status(201).json(newExpense);
};

// GET endpoint to retrieve all expenses
exports.getExpenses = (req, res) => {
  res.json(expenseService.getExpenses());
};

// PUT endpoint to update an existing expense by ID
exports.updateExpense = (req, res) => {
  const expenseId = req.params.id;
  const updatedData = req.body;

  const updatedExpense = expenseService.updateExpense(expenseId, updatedData);
  if (!updatedExpense) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.json({ message: "Expense updated", expense: updatedExpense });
};

// DELETE endpoint to delete an expense by its ID
exports.deleteExpense = (req, res) => {
  const expenseId = req.params.id;
  
  const deletedExpense = expenseService.deleteExpense(expenseId);
  if (!deletedExpense) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.json({ message: "Expense deleted", expense: deletedExpense });
};
