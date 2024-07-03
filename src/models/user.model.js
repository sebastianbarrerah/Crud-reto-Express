"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: "User"
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: false
    },
    notas: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'notas'
        }],
});
const userModel = (0, mongoose_1.model)('usuarios', userSchema);
exports.default = userModel;
