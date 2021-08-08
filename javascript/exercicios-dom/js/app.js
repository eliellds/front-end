let texto1 = document.getElementById("demo")
texto1.textContent = "Olá"
console.log(texto1)

let texto2 = document.getElementsByTagName("p")
texto2[0].innerText = "Olá"
console.log(texto2)

let texto3 = document.querySelectorAll(".test")
texto3[0].textContent = "Olá de novo"
console.log(texto3)

let changing = document.getElementById("image")
changing.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zelda_Logo.svg/1200px-Zelda_Logo.svg.png")
console.log(changing)

let newValue = document.getElementById("myText")
newValue.setAttribute("value", "Bye")
console.log(newValue)

let newValues = document.querySelector("#demo")
newValues.setAttribute("style", "color: red; font-size: 40px")
console.log(newValues)

// let sumiu = document.querySelector("p")
// sumiu.setAttribute("style", "display: none")
// console.log(sumiu)

