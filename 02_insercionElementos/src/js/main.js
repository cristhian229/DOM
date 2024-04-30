// const header = document.getElementsByTagName("header")

// console.log(header[0])

const header = document.querySelector("header")
console.log(header)

const titulo = document.createElement("h1")

titulo.innerHTML = "Galeria de chandosos"
// titulo.setAttribute("id", "titulo-principal")
titulo.id = "titulo-principal"
titulo.classList.add("text-primary")

header.classList.add("bg-dark","pb-5")


header.appendChild(titulo)