import { Schema, model } from "mongoose";
import { UserEstructure } from "../interfaces/user.interface";

const userSchema = new Schema<UserEstructure>({
    name:{
        type: String,
        default: "User"
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    state:{
        type: Boolean,
        default: false
    },
    notas: [{
        type: Schema.Types.ObjectId,
        ref: 'notas'  
    }],
})

const userModel = model('usuarios', userSchema);
export default userModel;