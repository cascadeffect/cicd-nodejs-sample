const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('TGIF Jenkins!')
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
