const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue">Hola Mundo!!!</h1>')
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

app.listen(8080, () => console.log('Server Up'))