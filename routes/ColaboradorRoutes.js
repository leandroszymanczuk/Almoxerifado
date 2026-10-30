import express from "express";

import {
    cadastrarColaborador,
    listarColaboradores,
    buscarColaboradorPorIndice,
    atualizarColaborador,
    deletarColaborador
} from "../Controller/colaboradorController.js";

const router = express.Router();

router.post("/", cadastrarColaborador);
router.get("/", listarColaboradores);
router.get("/:indice", buscarColaboradorPorIndice);
router.patch("/:indice", atualizarColaborador);
router.delete("/:indice", deletarColaborador);

export default router;