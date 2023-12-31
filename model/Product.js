import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        requird: true
    },
    image: {
        type: String,
        required: true
    }
})

export default mongoose.models.product || mongoose.model('product', productSchema)