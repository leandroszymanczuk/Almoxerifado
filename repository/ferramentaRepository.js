export const ferramentas = [];

export function cadastrar(ferramenta) {
    ferramentas.push(ferramenta);
    return ferramenta;
}

export function listar() {
    return ferramentas;
}

export function buscarPorIndice(indice) {
    return ferramentas[indice];
}

export function atualizar(indice, ferramenta) {
    ferramentas[indice] = {
        ...ferramentas[indice],
        ...ferramenta
    };

    return ferramentas[indice];
}

export function deletar(indice) {
    ferramentas.splice(indice, 1);
}