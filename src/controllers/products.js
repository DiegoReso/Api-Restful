const ProductsModel = require('../models/products')



async function get(req,res){

  const {id} = req.params


  const obj = id ? {_id : id} : null

  const products = await ProductsModel.find(obj)
  
  res.send(products)
}



async function post(req,res){

  const {
    name,
    brand,
    price
  } = req.body

  const product = new ProductsModel({
    name,
    brand,
    price,
  })

  product.save()

  res.send({
    message: 'success'
  })

}


async function put(req,res){

  const {id} = req.params

  //nesse metodo retorna os produtos atualizados
  const product = await ProductsModel.findOneAndUpdate({_id: id} , req.body, {new:true})

  res.send({
       message: 'success',
       product,
     })


  //desse jeito funciona mas no retorno do product ele retorna o produto antigo
  // const product = await ProductsModel.findOne({_id: id})  

  // await product.updateOne(req.body)

  // res.send({
  //   message: 'success',
  //   product,
  // })

}


async function remove(req,res){

}



module.exports = {
  get,
  post,
  put,
  remove
}