const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C",
"D", "E", "F"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click",()=>{
   let hexColor = '#';
   for(i=0; i<6; i++){
      let rand = getRandomNum();
      hexColor = hexColor + hex[rand];
   }
   document.body.style.backgroundColor = hexColor;
   color.textContent = hexColor
   // console.log(hexColor)
})

//get random number 0 - hex.length
function getRandomNum(){
   rand = Math.floor(Math.random() * hex.length);
   // console.log(rand)
   return rand;
}