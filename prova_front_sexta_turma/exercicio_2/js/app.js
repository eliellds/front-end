function mostrarPremio(posicao) {
    let premios = [1000, 800, 500]
    if (premios[posicao - 1] == undefined) {
        return console.log("Sem Prêmio")
    }

    return console.log("" + premios[posicao - 1] + "")
        
}

mostrarPremio(1)