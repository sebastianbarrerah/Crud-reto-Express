"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotaService = exports.updateNotaService = exports.addNotaService = exports.getNotasService = void 0;
const notas_model_1 = __importDefault(require("../models/notas.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const getNotasService = async (userId) => {
    const nota = await user_model_1.default.findById(userId).populate('notas');
    return nota?.notas || [];
};
exports.getNotasService = getNotasService;
const addNotaService = async (id, data) => {
    const { title, description, vencimiento } = data;
    const fecha = new Date();
    const diasDespues = fecha.setDate(fecha.getDate() + vencimiento);
    const response = await notas_model_1.default.create({
        userId: id, title, description, vencimiento: diasDespues
    });
    await user_model_1.default.findByIdAndUpdate(id, {
        $push: { notas: response._id }
    });
    return response;
};
exports.addNotaService = addNotaService;
const updateNotaService = async (id, actualizacion) => {
    const response = await notas_model_1.default.findOneAndUpdate({ _id: id }, actualizacion, { new: true });
    return response;
};
exports.updateNotaService = updateNotaService;
const deleteNotaService = async (id) => {
    const response = await notas_model_1.default.findOneAndDelete({ _id: id });
    return response;
};
exports.deleteNotaService = deleteNotaService;
