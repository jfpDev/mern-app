const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 80;

app.get('/api/resources', (req, res) => {
    res.send("Api resources");
});

app.use(express.static(path.join(process.cwd(), "build")));

const server = app.listen(PORT, () =>{
    console.log(`Server running at port:${server.address().port}`);
});