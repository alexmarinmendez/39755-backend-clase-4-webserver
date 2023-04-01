const express = require('express')
const ProductManager = require('./ProductManager.js')
const manager = new ProductManager()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="color:blue">Hola Mundo!!!</h1>')
})

app.get('/user', (req, res) => {
    res.send({ id: 1, name: "Alex", lastname: "Marin", course: "Backend" })
})

app.get('/sumar', (req, res) => {
    // const numero1 = Number(req.query.num1)
    // const numero2 = +req.query.num2
    const result = Number(req.query.num1) + Number(req.query.num2)
    res.send({ resultado: result})
})

app.get('/add/:num1/:num2', (req, res) => {
    const numero1 = +req.params.num1
    const numero2 = +req.params.num2
    const result = numero1 + numero2
    res.send({ resultado: result })
})

app.get('/products', (req, res) => {
    const products = manager.getProducts()
    // res.status(200).send({ products: products })
    res.status(200).send({ products })
})

app.post('/products', (req, res) => {
    const productName = req.body.name
    const productPrice = req.body.price
    const newProduct = { name: productName, price: +productPrice }
    manager.getProducts().push(newProduct)
    const products = manager.getProducts()
    res.status(201).send({ mensaje: 'Producto creado', products })
})

app.put('/products/:id', (req, res) => {
    const id = +req.params.id
    const datosNuevos = req.body
    const productIndex = manager.getProducts().findIndex(item => item.id === id)
    if (productIndex < 0) {
        return res.status(404).send({ message: 'Producto no encontrado' })
    }
    manager.getProducts()[productIndex] = datosNuevos
    res.status(202).send({ message: 'Producto actuazdafdasf' })
})

app.delete('/products/:id', (req, res) => {
    const id = +req.params.id
    //TODO
})

app.listen(8080, () => console.log('Server Up'))