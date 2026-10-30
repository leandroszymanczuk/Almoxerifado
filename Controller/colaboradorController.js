import { Colaborador } from "../model/Colaborador.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    deletar
} from "../repository/colaboradorRepository.js";

export function cadastrarColaborador(req, res) {
    const { nome, matricula, setor } = req.body;

    const colaborador = new Colaborador(
        nome,
        matricula,
        setor
    );

    cadastrar(colaborador);

    res.status(201).json(colaborador);
}

export function listarColaboradores(req, res) {
    res.status(200).json(listar());
}

export function buscarColaboradorPorIndice(req, res) {
    const indice = Number(req.params.indice);
    const colaborador = buscarPorIndice(indice);

    if (!Number.isInteger(indice) || indice < 0 || !colaborador) {
        return res.status(404).json({
            mensagem: "Colaborador não encontrado"
        });
    }

    res.status(200).json(colaborador);
}

export function atualizarColaborador(req, res) {
    const indice = Number(req.params.indice);
    const colaborador = buscarPorIndice(indice);

    if (!Number.isInteger(indice) || indice < 0 || !colaborador) {
        return res.status(404).json({
            mensagem: "Colaborador não encontrado"
        });
    }

    const colaboradorAtualizado = atualizar(indice, req.body);

    res.status(200).json(colaboradorAtualizado);
}

export function deletarColaborador(req, res) {
    const indice = Number(req.params.indice);
    const colaborador = buscarPorIndice(indice);

    if (!Number.isInteger(indice) || indice < 0 || !colaborador) {
        return res.status(404).json({
            mensagem: "Colaborador não encontrado"
        });
    }

    deletar(indice);

    res.status(204).end();
}