const ProductsModel = require('../models/products')



async function get(req,res){

  const {id} = req.params


  const obj = id ? {_id : id} : null

  const products = await ProductsModel.find(obj)
  
  res.send(products)
}



async function post(req,res){


}


async function put(req,res){

}


async function remove(req,res){

}



module.exports = {
  get,
  post,
  put,
  remove
}