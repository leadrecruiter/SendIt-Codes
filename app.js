const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

//Starting server
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, SendIt App!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
