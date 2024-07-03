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
exports.deleteNotaService = exports.updateNotaService = exports.addNotaService = exports.getNotasService = void 0;
const notas_model_1 = __importDefault(require("../models/notas.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const getNotasService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const nota = yield user_model_1.default.findById(userId).populate('notas');
    return (nota === null || nota === void 0 ? void 0 : nota.notas) || [];
});
exports.getNotasService = getNotasService;
const addNotaService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, vencimiento } = data;
    const fecha = new Date();
    const diasDespues = fecha.setDate(fecha.getDate() + vencimiento);
    const response = yield notas_model_1.default.create({
        userId: id, title, description, vencimiento: diasDespues
    });
    yield user_model_1.default.findByIdAndUpdate(id, {
        $push: { notas: response._id }
    });
    return response;
});
exports.addNotaService = addNotaService;
const updateNotaService = (id, actualizacion) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield notas_model_1.default.findOneAndUpdate({ _id: id }, actualizacion, { new: true });
    return response;
});
exports.updateNotaService = updateNotaService;
const deleteNotaService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield notas_model_1.default.findOneAndDelete({ _id: id });
    return response;
});
exports.deleteNotaService = deleteNotaService;
