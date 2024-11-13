const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
const port = 5002;

// Enable CORS for specific origin
app.use(cors({
    origin: 'http://localhost:3001'  // Only allow requests from this origin
}));

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Use the expense routes
app.use('/api/expenses', expenseRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
