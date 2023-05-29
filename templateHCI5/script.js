const inputText = document.getElementById("inputText")
const inputPassword = document.getElementById("inputPassword")
const inputNumber = document.getElementById("inputNumber")
const inputEmail = document.getElementById("inputEmail")
const inputGenderMale = document.getElementById("inputRadioMale")
const inputGenderFemale = document.getElementById("inputRadioFemale")
const buttonSubmit = document.getElementById("buttonSubmit")
const divError = document.getElementById("divError")

const asynchronous = document.getElementById("asynchronous")


buttonSubmit.addEventListener("click", (event)=>{

    // cancel refresh
    event.preventDefault()

    var errorText = ""

    // text harus diisi
    const text = inputText.value
    if (text == ''){
        console.log("Name harus diisi")
        errorText = "Nama harus diisi <br> <hr>"
    }

    // password minimal 8 characters
    const password = inputPassword.value
    if (password.length < 8){
        console.log("Password min 8 characters")
        errorText += "Password min 8 characters <hr>"
    }

    // number minimal 17
    const number =  inputNumber.value
    if (number < 17){
        errorText += "Number min 17 <br> <hr>"
    }

    // email harus ada @gmail.com
    const email = inputEmail.value
    if (!email.includes("@gmail.com")){
        errorText += "Must contain @gmail.com <br> <hr>"
    }

    // gender harus dipilih
    const genderMale = inputGenderMale.checked
    const genderFemale = inputGenderFemale.checked

    if (!genderMale && !genderFemale){
        errorText += "Gender harus dipilih <br> <hr>"
    }

    if (errorText == ''){
        alert("Registered!")
    }

    divError.innerHTML = errorText

    // console.log("uwu")

})

// const obj = {
//     nama : "owo",
//     umur : 20
// }

// // dynamic object
// obj.alamat = "Jakarta"

// obj = {} // error

async function f (){

    // ambil data dari interner / API
    const fetchResult = await fetch("https://api.genshin.dev/")
    console.log(fetchResult)

    // ambil textnya
    const text = await fetchResult.text()
    console.log(text)

    // ubah text jadi variable
    const obj = await JSON.parse(text)
    console.log(obj)

    obj.types.forEach(type => {
        asynchronous.innerHTML += `<div>${type}</div>`
    });
}

f()