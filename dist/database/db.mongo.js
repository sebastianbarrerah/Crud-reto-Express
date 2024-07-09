"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db = async () => {
    await (0, mongoose_1.connect)(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD}@cluster0.jjum9vk.mongodb.net/${process.env.BD}`);
};
exports.default = db;
