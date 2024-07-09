"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dataSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
});
const notaModel = (0, mongoose_1.model)("notas", dataSchema);
exports.default = notaModel;
