function changeGreet() {
    document.querySelector("#greet").textContent = "Hello, Js"
}

function changeBack() {
    document.body.style.backgroundColor =`pink`;
}

function showName() {
    let name = document.querySelector("#userInput").value;
    document.querySelector("#output").textContent = `Hello, ${name}!`
}

let count = 0

function inCount() {
    count++
    document.querySelector("#count").textContent = `${count}`
}

function changeImg() {
    document.querySelector("#dog1").src = "img/dog2.jpeg"
}

function togText() {
    let text = document.querySelector("#text")
    text.style.display = text.style.display === "no","STOP","Wai--"
}

function inFont() {
    document.querySelector("#textSize").style.fontSize = "50px"
}

function upCon() {
    document.querySelector("#title").textContent = "new title"
    document.querySelector("#des").textContent = "Text"
    document.querySelector("#des").style.color = "green"
}

function calcSquare() {
    let num = document.querySelector("#numInput").value
    let square = num * num
    document.querySelector("#result").textContent = `${num}^2 is ${square}`
}