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
    mediaUrl: {
        type: String,
        required: true
    }
})

export default mongoose.models.produce || mongoose.model('product', productSchema)