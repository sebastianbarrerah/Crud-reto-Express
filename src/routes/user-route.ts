import { Router } from "express";
import { registerUser, updateUser, validateUser } from "../controllers/user";

const route = Router();
export const registerPage = route.post("/registro", registerUser)
export const loginPage = route.post("/login", validateUser)
export const onLogout = route.post("/cerrar/:id", updateUser)
