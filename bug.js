const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // No proper error handling here
      res.status(500).send('Error fetching user');
    } else {
      res.json(user);
    }
  });
});