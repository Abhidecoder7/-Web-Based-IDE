const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [];

app.post('/addUser', (req, res) => {
  const { name, rollNo } = req.body;
  if (!name || !rollNo) {
    return res.status(400).json({ message: 'Name and roll number are required' });
  }
  users.push({ name, rollNo });
  res.status(201).json({ message: 'User added successfully' });
});

app.delete('/deleteUser', (req, res) => {
  const { rollNo } = req.body;
  if (!rollNo) {
    return res.status(400).json({ message: 'Roll number is required' });
  }
  users = users.filter(user => user.rollNo !== rollNo);
  res.status(200).json({ message: 'User deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
