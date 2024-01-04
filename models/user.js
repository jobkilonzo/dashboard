import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email must be unique'],
        require: [true, 'Email is require']
    },
    name: {
        type: String,
        unique: [true, 'name must be unique'],
        require: [true, 'name is require']
    }
})

const User = models.User || model('User', UserSchema)

export default User