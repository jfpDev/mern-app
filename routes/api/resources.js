const express = require('express');
const router = express.Router();

const ProductsService = require('../../services/products')


const productsServices = new ProductsService();

router.get('/', async (req, res, next) => {
    const {tags} = req.query;
    try {
        const products = await productsServices.getProducts({tags})
        res.status(200).json({
            data: products,
            message: 'Products listed'
        });
        console.log({tags});    
    } catch (error) {
        next(error);
    }
    
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await productsServices.getProducts({id});
    res.status(200).json({
        data: product,
        message: 'The required product is here'
    });
});

router.post('/', async (req, res) => {
    const {body: productReq} = req;
    const product = await productsServices.createProducts({productReq});
    res.status(201).json({
        data: product,
        message: 'Product created'
    });
});

router.put('/:id', async (req, res) => {
    const {productReq} = req.params;
    const {body: detail} = req;
    const product = await productsServices.updateProducts({productReq, detail});
    res.status(200).json({
        data: product,
        message: 'Product updated sucessfully'
    });
});

router.delete('/:id', async (req, res) => {
    const {productReq} = req.params;
    const product = await productsServices.updateProducts({productReq});
    res.status(200).json({
        data: product,
        message: 'Products deleted'
    });
});



module.exports = router;