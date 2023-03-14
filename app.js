const btn = document.getElementById("btn");
const sidebar = document.getElementById("sidebar");
const fontSizePlus = document.getElementById("fsPlus")
const fontSizeMinus = document.getElementById("fsMinus")
const paragraph  = document.querySelectorAll("p");

const colorNameInput = document.getElementById("reng-adi");
const applyColor = document.getElementById("applyColor")
let olcu = 16;


btn.addEventListener("click", function(){
    sidebar.classList.toggle("active");
})

fontSizePlus.addEventListener("click", function(){
    olcu++
    paragraph.forEach(function (e) {
        e.style.fontSize = olcu + "px";
    })
})

fontSizeMinus.addEventListener("click", function(){
    olcu--
    
    paragraph.forEach(function (e) {
        e.style.fontSize = olcu + "px";
    })
})


applyColor.addEventListener("click", function(){
    paragraph.forEach(function(e){
        e.style.color = colorNameInput.value;
    })
})

