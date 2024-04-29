let one = document.getElementById("btn-one")
let two = document.getElementsByClassName("btn-two")
let three = document.getElementsByName("btn-three")
let four = document.getElementsByTagName("button")

console.log(one)
console.log(two)
console.log(two[0])
console.log(three)
console.log(three[0])
console.log(four)
console.log(four[3])

let five = document.querySelector(".btn-outline-primary")
let six = document.querySelectorAll(".btn-outline-secondary")
let seven = document.querySelector(".btn-outline-success")
let eight = document.querySelectorAll("button")

console.log(five)
console.log(six)
console.log(seven)
console.log(eight[7])

let botonExample = document.querySelector(".btn-outline-primary")

botonExample.textContent = "EJEMPLO"

botonExample.addEventListener('click', function(){
  alert("hola mundo")
})
