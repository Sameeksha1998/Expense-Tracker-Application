const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

// Define routes for expenses
router.post('/', expenseController.createExpense);
router.get('/', expenseController.getExpenses);
router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
