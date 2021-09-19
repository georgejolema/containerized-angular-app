const express = require('express');

const app = express();

app.get('/api/transactions', (req, res) => {
  return res.json([
    {
        id: '1',
        description: 'test',
        value: 100,
        Date: new Date()
    },
    {
        id: '2',
        description: 'test2',
        value: 200,
        Date: new Date()
    },
  ]);
});

app.listen(3000, () =>
  console.log(`Example app listening on port 3000!`),
);
