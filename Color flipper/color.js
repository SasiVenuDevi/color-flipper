const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
console.log(hex[3])
btn.addEventListener('click',bg_change)

function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16) 
    console.log(hex[randomIndex])
     return hex[randomIndex]
}


function bg_change(){
    let hex_color = "#"
    for (i=1;i<=6;i++){
        hex_color += randHexValue()

        console.log(hex_color)

    }

console.log(hex_color)
   wrap.style.backgroundColor = hex_color
   colortext.innerHTML = hex_color
}