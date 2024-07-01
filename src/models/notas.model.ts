import { Schema, model } from "mongoose";
import {EstructuraNota} from "../interfaces/nota.interfaces";

const dataSchema = new Schema<EstructuraNota>({
    userId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    vencimiento: {
        type: Date,
        required: true,
    }
})
const notaModel = model("notas", dataSchema);
export default notaModel;

