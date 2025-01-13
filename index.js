const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, (error) => {
    if (error) {
        console.log("Error occurred: ", error.message);
    }
    console.log("Server is running on port 3000");
});