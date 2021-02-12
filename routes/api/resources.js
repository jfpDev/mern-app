const express = require('express');
const router = express.Router();

const productMock = require('../../utils/mocks/products');


router.get('/', (req, res) => {
    const {query} = req.query;
    res.status(200).json({
        data: productMock,
        message: 'Products listed'
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    
    res.status(200).json({
        data: productMock[0],
        message: 'Products listed'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        data: productMock[0],
        message: 'Product created'
    });
});

router.put('/:id', (req, res) => {
    res.status(200).json({
        data: productMock,
        message: 'Products listed'
    });
});

router.delete('/', (req, res) => {
    res.status(200).json({
        data: productMock[0],
        message: 'Products deleted'
    });
});



module.exports = router;