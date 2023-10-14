let outputColor = document.querySelector("#output-color span");
let output = document.getElementById("output");
let genBtn = document.getElementById("gen-btn");

let hexString = "0123456789abcdef";

let genHexCode = () => {
    let hexCode = "#";
    for( i = 0; i < 6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    output.value = hexCode;
    outputColor.classList.remove("show-color");
    setTimeout( () => {
        outputColor.classList.add("show-color");
    },10);
    outputColor.style.backgroundColor = hexCode;
}
window.onload = genHexCode;
genBtn.addEventListener("click", genHexCode);
