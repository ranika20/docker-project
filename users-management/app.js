const express = require('express');

const app = express();
const port = 3000;  
app.use(express.json());


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server.');
  console.log('Use the following endpoint to get the list of users:');
  console.log(`App is running on !!!!! ${port}`);
  console.log(`hello world`);
});

app.get('/', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  res.json(users);
  res.send('Welcome to the User Management API!');
});
