class ProductManager {
    constructor() {
        this.products = [
            {id: 1, name: "Coca Cola", price: 45 },
            {id: 2, name: "Pepsi", price: 40 },
        ]
    }

    getProducts = () => {
        return this.products
    }

    
}

module.exports = ProductManager