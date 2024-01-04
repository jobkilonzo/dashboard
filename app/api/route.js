import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async(req) => {
    const {name, email} = await req.json()

    try{
        await connectToDB()
        const newUser = new User({
            name, email
        })
        await newUser.save()

        return new Response(JSON.stringify(newUser, {status:201}))
    }catch(error){
        return new Response("Failed to create new user", {status: 500})
        console.log(error)
    }
}