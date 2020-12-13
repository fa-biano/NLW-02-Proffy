document.querySelector("#add-time")
// querySeletor faz o mesmo trabalho do getElementBy. Dentro dos parentêses podemos colocar Id ou Class (usando # e .)
.addEventListener('click', cloneField)
//substitui a necessidade criar um comando "onclick" no html para chamar a function

function cloneField(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    // cloneNode irá clonar o que estiver dentro do querySelector

    const fields = newFieldContainer.querySelectorAll("input")
    fields.forEach(function(field){
       field.value = ""
    })


    document.querySelector("#schedule-itens").appendChild(newFieldContainer)
    // appendChild irá adicionar um elemento filho ao elemento que estiver dentro do querySelector. Iremos adicionar o elemento que foi clonado no cloneNode acima.
}