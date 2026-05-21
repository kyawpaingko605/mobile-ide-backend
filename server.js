const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/build', (req, res) => {
  console.log('Build request received:', req.body);
  res.json({ success: true, message: 'Build started' });
});

app.listen(3000, () => console.log('Server running'));
