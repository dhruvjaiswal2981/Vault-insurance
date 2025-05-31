const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// DB Setup
const dbPath = path.resolve(__dirname, 'contact.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) return console.error(err.message);
  console.log('✅ Connected to SQLite DB');
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    phone TEXT NOT NULL,
    helpWith TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// POST endpoint to save contact
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, phone, helpWith, message } = req.body;

  const query = `
    INSERT INTO contact_submissions (firstName, lastName, phone, helpWith, message)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [firstName, lastName, phone, helpWith, message], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Failed to save data' });
    }
    res.status(201).json({ success: true, id: this.lastID });
  });
});

app.get('/api/contact', (req, res) => {
  db.all('SELECT * FROM contact_submissions ORDER BY createdAt DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Failed to retrieve data' });
    res.json(rows);
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
