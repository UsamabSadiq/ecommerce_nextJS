import Product from "../../../model/Product"

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getProduct(req, res)
            break;

        case "DELETE":
            await deleteProduct(req, res)
            break;
    }
}

// for below functions we create services folders...
const getProduct = async (req, res) => {
    const { pid } = req.query // hard coded product ki id paas krain gra /api/product/pid google k search bar ma tw hamain response mily ga.
    const singleProduct = await Product.findOne({ _id: pid }) // product.findOne sa hamain DB sa id ko compare kr ta ha pid k sath.
    res.status(200).json(singleProduct)
}

const deleteProduct = async (req, res) => {
    const { pid } = req.query
    await Product.findByIdAndDelete({ _id: pid }) // product delete ho jaye ga tw store kr na k liye hamary paas kuch ho ga nhi iss liye direct await laga dya..
    res.status(200).json() // product delete ho gya iss liye empty json laga dya ha..
}