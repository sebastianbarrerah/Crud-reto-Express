"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateState = exports.loginService = exports.registerServices = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const registerServices = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield user_model_1.default.find({ data });
    if (response.length > 0)
        return null;
    const newUser = yield user_model_1.default.create(data);
    return newUser;
});
exports.registerServices = registerServices;
const loginService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield user_model_1.default.findOne({ "email": email, "password": password });
    if (res === null)
        return null;
    yield user_model_1.default.findOneAndUpdate({ email }, { state: true });
    return res;
});
exports.loginService = loginService;
const updateState = (id) => {
    const response = user_model_1.default.findByIdAndUpdate(id, { $set: { state: false } });
    return response;
};
exports.updateState = updateState;
