$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        nav: true
    });
  });

let lista = document.querySelectorAll(".item")
console.log(lista)

lista.forEach(function(value, index) {
    lista[index].textContent = "Item nav " + (index + 1)
});