const colors = ["red","green","blue","white","black"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener("click",()=>{
   //get random number b/w 0-4
   const randomNum = getRandomNum();
   document.body.style.backgroundColor = colors[randomNum];
   color.textContent = colors[randomNum];
   // console.log(randomNum)
})

function getRandomNum(){

   rand = Math.floor( Math.random() * colors.length);
   return rand;
}