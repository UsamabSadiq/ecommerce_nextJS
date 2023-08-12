import Product from "../../../model/Product"

export default async (req, res) => {
    const { pid } = req.query // hard coded product ki id paas krain gra /api/product/pid google k search bar ma tw hamain response mily ga.
    const singleProduct = await Product.findOne({ _id: pid }) // product.findOne sa hamain DB sa id ko compare kr ta ha pid k sath.
    res.status(200).json(singleProduct)
} 