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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.registerUser = exports.validateUser = void 0;
const user_services_1 = require("../services/user-services");
// login
const validateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password)
        return res.status(404).json({ message: "Debe tener email y contraseña" });
    if (email || password) {
        try {
            const response = yield (0, user_services_1.loginService)(email, password);
            if (response === null)
                return res.status(404).json({ message: "Usuario no encontrado" });
            res.send(response);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Fallo al ingresar" });
        }
    }
    else {
        return res.status(404).json({ message: "Falta contraseña o correo" });
    }
});
exports.validateUser = validateUser;
// Registro de usuario
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    if (!email || !name || !password)
        return res.status(404).json({ message: "Faltan datos para crear usuario" });
    try {
        const response = yield (0, user_services_1.registerServices)(req.body);
        if (response == null)
            return res.status(404).json({ message: "Usuario ya registrado" });
        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al registrar el usuario" });
    }
});
exports.registerUser = registerUser;
// Actualizar estado
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const response = yield (0, user_services_1.updateState)(id);
        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error actualizando datos del user" });
    }
});
exports.updateUser = updateUser;
