const value = document.querySelector(".value")
// const decBtn = document.querySelector(".dec-btn")
// const resBtn = document.querySelector(".res-btn")
// const incBtn = document.querySelector(".inc-btn")
const btns = document.querySelectorAll(".btn")

let count = 0

value.textContent = count;

// decBtn.addEventListener("click", () => {
//    value.textContent = count--;
// })
// resBtn.addEventListener("click", () => {
//    value.textContent = count = 0;
// })
// incBtn.addEventListener("click", () => {
//    value.textContent = count++;
// })

btns.forEach((btn)=>{
   btn.addEventListener("click",(e)=>{
      const cList = e.currentTarget.classList;
      if(cList.contains("dec-btn")){
         count--;
      }
      else if(cList.contains("res-btn")){
         count=0;
      }
      else{
         count++;
      }
      if(count> 0 ){
         value.style.color = "green"
      }
      else if(count < 0){
         value.style.color = "red"
      }
      else{
         value.style.color = "black"
      }
      value.textContent=count;
   })
})