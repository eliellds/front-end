let inscricao = document.querySelector("#inscricaoEstadual")
let uf2 = document.querySelector("#uf2")

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

let nomeRazao = document.querySelector("#nomeRazao")
let regexNome = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
nomeRazao.addEventListener("blur", function() {
    validador("nomeRazao", nomeRazao, regexNome)
})

let cpfCnpj = document.querySelector("#cpfCnpj")
let regexCpfCnpj = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
cpfCnpj.addEventListener("blur", function() {
    validador("cpfCnpj", cpfCnpj, regexCpfCnpj)
})

let dataNascimento = document.querySelector("#dataNascimento")
let regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
dataNascimento.addEventListener("blur", function() {
    validador("dataNascimento", dataNascimento, regexData)
})

let dataCadastro = document.querySelector("#dataCadastro")
dataCadastro.addEventListener("blur", function() {
    validador("dataCadastro", dataCadastro, regexData)
})

let endereco = document.querySelector("#endereco")
let regexEndereco = /(\b[A-Za-z](?!\s))/
endereco.addEventListener("blur", function() {
    validador("endereco", endereco, regexEndereco)
})

let bairro = document.querySelector("#bairro")
bairro.addEventListener("blur", function() {
    validador("bairro", bairro, regexEndereco)
})

let cep = document.querySelector("#cep")
let regexCep = /^\d{5}-?\d{3}$/
cep.addEventListener("blur", function() {
    validador("cep", cep, regexCep)
})

let municipio = document.querySelector("#municipio")
let regexMunicipio = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/
municipio.addEventListener("blur", function() {
    validador("municipio", municipio, regexMunicipio)
})

let telefone = document.querySelector("#telefone")
let regexTelefone = /^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/
telefone.addEventListener("blur", function() {
    validador("telefone", telefone, regexTelefone)
})

let celular = document.querySelector("#celular")
celular.addEventListener("blur", function() {
    validador("celular", celular, regexTelefone)
})

let uf1 = document.querySelector("#uf1")
uf1.addEventListener("blur", function() {
    let itemSelecionado = uf1.options[uf1.selectedIndex]

    console.log(itemSelecionado)
    if (itemSelecionado.value == "") {
        document.querySelector('.sucesso-uf1').style.display = 'none'
        document.querySelector('.erro-uf1').style.display = 'block'
        uf1.setAttribute("style", "border: solid red; background-color: rgba(255, 0, 0, 0.1);")
        return
    } else {
        document.querySelector('.erro-uf1').style.display = 'none'
        // document.querySelector('.sucesso-' + nomeElemento).style.display = 'block'
        uf1.setAttribute("style", "border: solid green; background-color: rgba(0, 128, 0, 0.1);")
        return
    }
})