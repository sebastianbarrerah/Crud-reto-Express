"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onLogout = exports.loginPage = exports.registerPage = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
const route = (0, express_1.Router)();
exports.registerPage = route.post("/registro", user_1.registerUser);
exports.loginPage = route.post("/login", user_1.validateUser);
exports.onLogout = route.post("/cerrar/:id", user_1.updateUser);
