let rdDevs = {
    getElem: function (elemento) {
        return document.querySelector(elemento)
    },
    getAllElem: function (elemento) {
        return document.querySelectorAll(elemento)
    },
    logElem: function (elemento) {
        console.log(document.querySelector(elemento))
    },
    logAllElem: function (elemento) {
        console.log(document.querySelectorAll(elemento))
    }
}


// let insertBtn = rdDevs.getElem(".buttons")
// insertBtn.innerHTML = "<button class='btn-cumprimentar'>Cumprimentar</button>"

// let btn = insertBtn
// btn.onclick = function() {
//     alert("Olá")
// }


// let insertBtn = rdDevs.getElem(".buttons")
// insertBtn.innerHTML = "<button class='btn-alterar'>Alterar Fundo</button>"

// let bodyColor = rdDevs.getElem(".body")

// let btn = insertBtn
// btn.onclick = function() {
//     if (bodyColor.style.backgroundColor == "green")
//         bodyColor.style.backgroundColor = "white"
//     else
//         bodyColor.style.backgroundColor = "green"
// }


// let insertImages = rdDevs.getElem(".images")
// insertImages.innerHTML = "<img src='https://http2.mlstatic.com/D_NQ_NP_797685-MLB31180651169_062019-O.jpg' class='img-over'>"

// let imgOver = insertImages
// imgOver.onmouseover = function() {
//     console.log("estou vendo a imagem")
// }


let insertImages = rdDevs.getElem(".images")
insertImages.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/The_Legend_of_Zelda_Majora%27s_Mask.svg/1024px-The_Legend_of_Zelda_Majora%27s_Mask.svg.png'>"

// let imgClick = insertImages
// imgClick.addEventListener("click", function() {
//     console.log("estou clicando na imagem")
// })


let body = rdDevs.getElem(".body")

function changeColorClick(event) {
    console.log(event.clientY)
    console.log(event.clientX)
    // if (body.style.backgroundColor == "red")
    //     body.style.backgroundColor = "white"
    // else
    //     body.style.backgroundColor = "red"
}

body.addEventListener("click", changeColorClick)

// body.removeEventListener("click", changeColorClick)


let insertBtn = rdDevs.getElem(".buttons")
insertBtn.innerHTML = "<form id='link' action='https://www.google.com/'><button type='submit'>Enviar</button></form>"

rdDevs.getElem("#link").addEventListener("click", function(event) {
    event.preventDefault()
    alert("Não é possível enviar")
})

// setTimeout(function() {
//     alert("tempo esgotado!")
// }, 10000);

// setInterval(function() {
//     alert("hora do intervalo!")    
// }, 5000);
