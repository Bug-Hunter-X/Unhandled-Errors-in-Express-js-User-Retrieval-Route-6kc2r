const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate user ID
  if (!/^[0-9]+$/.test(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: 'Failed to fetch user' });
    } else if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});