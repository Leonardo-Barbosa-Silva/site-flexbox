const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${port}`);
});
