import { Ferramenta } from "../model/Ferreamenta.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    deletar
} from "../repository/ferramentaRepository.js";

export function cadastrarFerramenta(req, res) {
    const { codigo, descricao, estado } = req.body;

    const ferramenta = new Ferramenta(
        codigo,
        descricao,
        estado
    );

    cadastrar(ferramenta);

    res.status(201).json(ferramenta);
}

export function listarFerramentas(req, res) {
    res.status(200).json(listar());
}

export function buscarFerramentaPorIndice(req, res) {
    const indice = Number(req.params.indice);
    const ferramenta = buscarPorIndice(indice);

    if (!Number.isInteger(indice) || indice < 0 || !ferramenta) {
        return res.status(404).json({
            mensagem: "Ferramenta nao encontrada"
        });
    }

    res.status(200).json(ferramenta);
}

export function atualizarFerramenta(req, res) {
    const indice = Number(req.params.indice);
    const ferramenta = buscarPorIndice(indice);

    if (!Number.isInteger(indice) || indice < 0 || !ferramenta) {
        return res.status(404).json({
            mensagem: "Ferramenta nao encontrada"
        });
    }

    const ferramentaAtualizada = atualizar(indice, req.body);

    res.status(200).json(ferramentaAtualizada);
}

export function deletarFerramenta(req, res) {
    const indice = Number(req.params.indice);
    const ferramenta = buscarPorIndice(indice);

    if (!Number.isInteger(indice) || indice < 0 || !ferramenta) {
        return res.status(404).json({
            mensagem: "Ferramenta nao encontrada"
        });
    }

    deletar(indice);

    res.status(204).end();
}