const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

console.log("Do You Use Replit For Your Discord Bot? Do You Use Features Like Uptime Robot For Your Bot? Why Not Make One Yourself With A Higher Ping Rate");