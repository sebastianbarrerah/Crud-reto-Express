import { Router } from "express";
import { updateNota, addNewNota, getNotas, removeNota } from "../controllers/notas";

const router = Router();
export const getData = router.get("/notas/:id", getNotas);
export const postNota = router.post("/agregar/:id", addNewNota);
export const updateTheNota = router.patch("/actualizar/:id", updateNota);
export const deleteNota = router.delete("/borrar/:id", removeNota);





