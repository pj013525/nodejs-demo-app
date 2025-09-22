const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CI/CD Demo App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          background: #f5f7fa;
          margin: 0;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
        img {
          margin-top: 20px;
          width: 300px;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        p {
          font-size: 18px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Hello from CI/CD Pipeline</h1>
      <p>Your Node.js app is deployed successfully!</p>
      <img src="https://picsum.photos/400/250" alt="Random Demo Image" />
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
