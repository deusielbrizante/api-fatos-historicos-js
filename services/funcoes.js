import fatosHistoricos from "../data/fatos.js"

export function servicoBuscarFatoPorAno(ano) {
    let fatoDoAno = fatosHistoricos.find((fato) => {
        return fato.Ano === ano
    })

    return fatoDoAno.Fato
}

export function validaAno(ano) {

    if (isNaN(ano)) {
        return false
    } else {
        if (ano < 1920 || ano > 2020) {
            return false
        } else {
            return true
        }
    }
}