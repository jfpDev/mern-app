const express = require('express');
const app = express();
const path = require('path');

const resourcesProducts = require('../routes/api/resources');

const PORT = process.env.PORT || 8000;

app.use('/api/resources', resourcesProducts);

app.use(express.static(path.join(process.cwd(), "build")));

const server = app.listen(PORT, () =>{
    console.log(`Server running at port:${server.address().port}`);
});