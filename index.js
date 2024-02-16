import express from "express"
import { servicoBuscarFatoPorAno, validaAno } from "./services/funcoes.js"

const app = express()

app.get("/", (req, res) => {
    let anoFato = req.query.ano

    if (validaAno(anoFato)) {
        let fato = servicoBuscarFatoPorAno(anoFato)
        res.json({ fato: fato })
    } else {
        res.status(400).json({erro: "Parâmetro {ano} inválido"})
    }

})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})