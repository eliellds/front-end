function validador(nomeElemento, elemento, regex) {
    if (regex.test(elemento.value.trim())) {
        document.querySelector('.erro-' + nomeElemento).style.display = 'none'
        // document.querySelector('.sucesso-' + nomeElemento).style.display = 'block'
        elemento.setAttribute("style", "border: solid green; background-color: rgba(0, 128, 0, 0.1);")
        return
    } else {
        document.querySelector('.sucesso-' + nomeElemento).style.display = 'none'
        document.querySelector('.erro-' + nomeElemento).style.display = 'block'
        elemento.setAttribute("style", "border: solid red; background-color: rgba(255, 0, 0, 0.1);")
        return
    }
}

let cpfPaciente = document.querySelector("#cpfPaciente")
let regexNome = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
cpfPaciente.addEventListener("blur", function() {
    validador("cpfPaciente", cpfPaciente, regexNome)
})


let cpfPaciente = document.querySelector("#cpfPaciente")
let regexCPF = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/
cpfPaciente.addEventListener("blur", function() {
    validador("cpfPaciente", cpfPaciente, regexCPF)
})