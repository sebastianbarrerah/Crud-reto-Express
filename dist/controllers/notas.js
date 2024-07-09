"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNota = exports.updateNota = exports.addNewNota = exports.getNotas = void 0;
const nota_services_1 = require("../services/nota.services");
// Traer todas las notas
const getNotas = async (req, res) => {
    const response = await (0, nota_services_1.getNotasService)(req.params.id);
    if (response.length === 0)
        return res.status(400).json({ Message: "No hay notas" });
    try {
        return res.send(response);
    }
    catch (error) {
        res.status(500).json({ Error: "Error al traer los datos" });
    }
};
exports.getNotas = getNotas;
// Agregar una nueva nota
const addNewNota = async (req, res) => {
    const { title, description, vencimiento } = req.body;
    const id = req.params.id;
    if (!description || !title || !vencimiento)
        return res.status(404).json("Faltan parametros");
    try {
        const response = await (0, nota_services_1.addNotaService)(id, req.body);
        res.send(response);
    }
    catch (error) {
        res.status(500).json({ Error: "Error al crear nota" });
    }
};
exports.addNewNota = addNewNota;
// Actulizar una nota
const updateNota = async (req, res) => {
    const id = req.params.id;
    if (!id)
        return res.status(404).json({ message: "Error al actualizar, faltan parametros" });
    try {
        const response = await (0, nota_services_1.updateNotaService)(id, req.body);
        res.send(response);
    }
    catch (error) {
        res.status(500).json({ Error: "Error al actualizar" });
    }
};
exports.updateNota = updateNota;
// Eliminar una nota
const removeNota = async ({ params }, res) => {
    const { id } = params;
    if (!id)
        return res.status(404).json({ Message: "No se pudo eliminar la nota" });
    try {
        const response = await (0, nota_services_1.deleteNotaService)(id);
        res.status(200);
        res.send(response);
    }
    catch (error) {
        res.status(500).json({ Error: "Error al eliminar la nota" });
    }
};
exports.removeNota = removeNota;
