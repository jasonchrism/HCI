console.log("Hello Javascript")

// callback function -> function yang kita passing ke parameter function lain untuk dijalankan
// DOM -> Document Object Medal

/*
3 variable

Let -> bersifat local
var -> bersifat global
const -> local & tidak bisa diganti
=== -> validate the valua and data type

*/

// let a = "Hello"

// {
//     console.log(a)
// }

const a = 10
const b = "10"

if (a === b){
    console.log("EQUAL")
} else if (a < b){
    console.log("a is smaller than b")
} else if (a > b){
    console.log("a is greater than b")
} else {
    console.log("Diff data type")
}

for (let i = 0; i < 10; i++){
    console.log("i = " + i)
}

let j = 0
while ( j < 10){
    console.log("j = " + j)
}

const numberItem = document.getElementById("number-item")
console.log(numberItem)


for (let i = 0; i < 10; i++){
    const numberDiv = document.createElement("div")
    
    numberDiv.appendChild(document.createTextNode(i))
    numberItem.appendChild(numberDiv)
}


const names = ["Jason Chrisbellno", "Yokun", "Justine Tintin", "BijiX"]

// for (let i = 0; i < names.length; i++){
//     const name = names[i]
//     console.log(name)
// }

const peopleItem = document.getElementById("people-item")

names.forEach(name => {
    console.log(name);

    const spaceIndex = name.indexOf(' ')

    if (spaceIndex != -1){
        name = name.substring(0, spaceIndex)
    }

    // peopleItem.innerHTML += "<div> " + name + " </div>"
    peopleItem.innerHTML += `<div> ${name} </div>`
})

function getElementById(tagID){
    return document.getElementById(tagID)
}

// function printName(name){
//     console.log(name)
// }

// const printName2 =(name) => {
//     console.log(name)    
// }

// printName("BijiX")


const dateValue = document.getElementById("date-value")

let count = 0;
dateValue.addEventListener("click", _ => {
    count++;
    console.log("click count: " + count)
})

let hover = 0;
dateValue.addEventListener("mouseover", _ => {
    hover++;
    console.log("hover count: " + hover)
})

const date = new Date()

dateValue.textContent = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

//  