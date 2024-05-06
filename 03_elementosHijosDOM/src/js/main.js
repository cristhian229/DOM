const body = document.querySelector("body")
const main = document.querySelector("main")

const boton = document.querySelector('#boton')


function createBtnSucces(){
  const button = document.createElement("button")
  button.setAttribute("type","button")
  button.classList.add("btn","btn-success")
  button.textContent = "Hello"
  return button
}

createBtnSucces()

boton.addEventListener('click', () => {
    // const response = createBtnSucces()
    // main.appendChild(response)
    // main.innerHTML += `<button type= "button" class = "btn btn-success"> hello</button>`

    // removeChild
    
    // const btnForElimination = selectOneBtn()
    // main.removeChild(btnForElimination)

    // ReplaceChild

    // const newButton = createBtnSucces()
    // const existentBtn = selectOneBtn()
    // main.replaceChild(newButton,existentBtn)

    // insertBefore

    const nuevoBoton = createBtnSucces()
    const btnReference = selectOneBtn()
    main.insertBefore(nuevoBoton,btnReference)
})

function selectOneBtn (){
  const btnFound = document.querySelector(".btn-info")
  return btnFound
}
selectOneBtn()