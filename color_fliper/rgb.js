const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

let randLeng = 0;
let randLengCount = 0;

btn.addEventListener("click",()=>{
   let rgbColor = "rgb(";
   let randomLength = getRandomLength();
   for(let i = 0;i < 3;i++){
      for(let j = 0; j < randomLength ;j++)
      rgbColor = rgbColor + getRandomNum();
      /**rgbColor.length = 15 
         when 1-3 * 1-3 numbers and two coma added in rgbColor 
      */
      if(rgbColor.length !== randomLength * 3 +6){
         rgbColor = rgbColor + ",";
      }
   }
   console.log("count =" + randLengCount);  
   rgbColor = rgbColor + ")";
   console.log(rgbColor);
   console.log(randomLength);
   document.body.style.backgroundColor = rgbColor;
   color.textContent = rgbColor;
   rgbColor = null;
})

function getRandomNum(){
   randNum = Math.floor(Math.random() * num.length);
   return randNum;
}

function getRandomLength(){
   randLengCount = Math.floor(Math.random() * 2)+2;
   randLeng = randLengCount
   randLengCount=randLengCount+randLengCount;
   return randLeng;
}
