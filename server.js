const express = require('express');
const routes = require('./routes');
const db = require('./config/connection'); // Import the connection
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
