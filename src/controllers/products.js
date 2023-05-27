const ProductsModel = require('../models/products')



async function get(req,res){

  const products = await ProductsModel.find()
  
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