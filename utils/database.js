import mongoose from "mongoose";

let isConnected= false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log('MonogoDB is already connected')
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "user",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true
        console.log("Connected")
    }catch(error){
        console.log(error)
    }
}
