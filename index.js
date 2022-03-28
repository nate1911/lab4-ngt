
const express = require('express');
const app = express();

const PORT = process.env.PORT || 2000;

app.use(express.json())
app.use(express.static('public'));





app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    
});