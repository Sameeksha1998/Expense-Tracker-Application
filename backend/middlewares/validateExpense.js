// Example middleware if needed
function validateExpenseMiddleware(req, res, next) {
    const validation = expenseService.validateExpense(req.body);
    if (!validation.isValid) {
      return res.status(400).json({ error: validation.message });
    }
    next();
  }
  
  module.exports = validateExpenseMiddleware;
  