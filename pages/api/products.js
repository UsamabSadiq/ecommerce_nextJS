// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../helper/initDB"
import Product from "../../model/Product"

initDB()
// Get All Products
export default async function (req, res) {
  let allProduct = await Product.find()
  res.status(200).json(allProduct)
}
