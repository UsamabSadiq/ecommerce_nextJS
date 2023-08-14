// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../helper/initDB"
import Product from "../../model/Product"

initDB()

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getAllProducts(req, res)
      break;

    case "POST":
      await saveProducts(req, res)

  }
}



// Get All Products
const getAllProducts = async function (req, res) {
  let allProduct = await Product.find()
  res.status(200).json(allProduct)
}


// Saving Products to DB
const saveProducts = async function (req, res) {

  const { name, price, image, description } = req.body
  // console.log('body-request', name, price, image, description);
  if (!name || !price || !image || !description) {
    res.status(422).json({ error: 'Plz Add All Fields!!' })
  }
  const newCreatedProduct = await new Product({
    name, price, image, description
  }).save()
  // console.log('New Product Created', newCreatedProduct);
  res.status(200).json(newCreatedProduct)

}
