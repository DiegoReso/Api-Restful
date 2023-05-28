const ProductsController = require('../controllers/products')
const router = require('express').Router()


//Verbos HTTP(4tipos)
//GET obter dadois
//POST enviar/receber dados
//PUT atualizar dadot
//DELETE remover dados


router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove)

module.exports = router