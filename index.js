// var div = document.getElementById("main")
// console.log(div)

// var titres = document.getElementsByTagName("h1")
// titres[0].style.color = "red"
// titres[1].style.color = "green"
// console.log(titres)


// var paragraphes = document.getElementsByClassName("para")
// console.log(paragraphes)


// var titres = document.querySelectorAll("h1")
// console.log(titres)

// var paragraphes = document.querySelectorAll(".para")
// console.log(paragraphes)

// var tit = document.querySelector("h1")
// console.log(tit)
// tit.style.color = "green"


// var division = document.querySelector("#main")
// console.log(division)
// console.log(division.innerHTML)
// console.log(division.innerText)

// var divi = document.querySelector("#main")
// console.log(divi.firstElementChild)
// console.log(divi.firstElementChild.nextElementSibling)
// console.log(divi.lastElementChild)
// console.log(divi.lastElementChild.previousElementSibling.previousElementSibling)

// var titre = document.querySelector("h1")

// console.log(titre.parentElement)

// var divi = document.querySelector("#main")

// var newbutton = document.createElement("button")

// newbutton.innerText = "Achref"

// divi.appendChild(newbutton)

// divi.firstElementChild.setAttribute("class","djeja")

// var divi = document.querySelector("#main")

// divi.remove()

// function Mariem(){
//     alert("Hello Si Achref")
// }

// var plus = document.querySelector(".btnPlus")
// var moins = document.querySelector(".btnMoins")

// plus.addEventListener("click",function(){
//     plus.previousElementSibling.innerText++
// })

// moins.addEventListener("click",function(){
//     if(moins.nextElementSibling.innerText>0){
//         moins.nextElementSibling.innerText--
//     }    
// })

 var plus = document.querySelectorAll(".btnPlus")

 for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener("click",function(){
        plus[i].previousElementSibling.innerText++
    })
 }