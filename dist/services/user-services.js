"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateState = exports.loginService = exports.registerServices = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const registerServices = async (data) => {
    const response = await user_model_1.default.find({ data });
    if (response.length > 0)
        return null;
    const newUser = await user_model_1.default.create(data);
    return newUser;
};
exports.registerServices = registerServices;
const loginService = async (email, password) => {
    const res = await user_model_1.default.findOne({ "email": email, "password": password });
    if (res === null)
        return null;
    await user_model_1.default.findOneAndUpdate({ email }, { state: true });
    return res;
};
exports.loginService = loginService;
const updateState = (id) => {
    const response = user_model_1.default.findByIdAndUpdate(id, { $set: { state: false } });
    return response;
};
exports.updateState = updateState;
