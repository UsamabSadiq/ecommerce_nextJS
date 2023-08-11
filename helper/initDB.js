import mongoose from "mongoose";
// track the connection
let isConnected = false;
const initDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        console.log("DB connected already");
        return;
    }
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nextjs_ecommerce', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log('DB connected successfully...');
    } catch (error) {
        console.log(error);
    }
};

export default initDB;