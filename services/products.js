const productsMock = require('../utils/mocks/products');


class ProductsService{
    constructor(){

    }

    getProducts({tags}){
        return Promise.resolve(productsMock);
    }

    getProducts({productId}){
        return Promise.resolve(productsMock[0]);
    }

    createProducts({productId}){
        return Promise.resolve(productsMock[0]);
    }

    updateProducts({productId, detail}){
        return Promise.resolve(productsMock[0]);
    }
    
    deleteProducts({productId}){
        return Promise.resolve(productsMock[0]);
    }        
}


module.exports = ProductsService;