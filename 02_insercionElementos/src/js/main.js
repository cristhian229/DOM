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











const main = document.querySelector("main")
main.innerHTML =`
  <article class="card" style="width: 18rem;">
  <img src="https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/11/11/618da2f0f2822.jpeg"
    class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Rigoberto</h5>
    <p class="card-text">Raza: Pug <br>
    Edad: 2 años</p>
    <a href="#" class="btn btn-primary">Adoptar</a>
  </div>
  </article>
`

for (let i = 0; i < 50; i++) {
  main.innerHTML +=`
    <article class="card" style="width: 18rem;">
    <img src="https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/11/11/618da2f0f2822.jpeg"
      class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Rigoberto</h5>
      <p class="card-text">Raza: Pug <br>
      Edad: 2 años</p>
      <a href="#" class="btn btn-primary">Adoptar</a>
    </div>
    </article>
  `
}