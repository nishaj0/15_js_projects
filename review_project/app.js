// data
const reviews = [{
      id: 1,
      name: "Sara Jones",
      img: "imgs/pexels-andrea-piacquadio-733872.jpg",
      job: "ux designer",
      text: "Anim in Lorem anim laboris mollit enim dolor. Tempor exercitation proident voluptate deserunt fugiat consequat nisi amet eu. Ullamco incididunt mollit consequat et. Deserunt fugiat officia cupidatat culpa pariatur."

   },
   {
      id: 2,
      name: "Marie sins",
      img: "imgs/pexels-andrea-piacquadio-774909.jpg",
      job: "Data analyst",
      text: "Anim in Lorem anim laboris mollit enim dolor. Tempor exercitation proident voluptate deserunt fugiat consequat nisi amet eu. Ullamco incididunt mollit consequat et. Deserunt fugiat officia cupidatat culpa pariatur."
   },
   {
      id: 3,
      name: "Chung Chang",
      img: "imgs/pexels-mentatdgt-937481.jpg",
      job: "mern devoloper",
      text: "Anim in Lorem anim laboris mollit enim dolor. Tempor exercitation proident voluptate deserunt fugiat consequat nisi amet eu. Ullamco incididunt mollit consequat et. Deserunt fugiat officia cupidatat culpa pariatur."
   },
   {
      id: 4,
      name: "John Doe",
      img: "imgs/pexels-pixabay-220453.jpg",
      job: "web designer",
      text: "Anim in Lorem anim laboris mollit enim dolor. Tempor exercitation proident voluptate deserunt fugiat consequat nisi amet eu. Ullamco incididunt mollit consequat et. Deserunt fugiat officia cupidatat culpa pariatur."
   },
]

//selecting items

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const about = document.getElementById("about")
const talk = document.getElementById("talk")

const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const randomBtn = document.querySelector(".random")

//let starting item
let currentItem = 0;


// load initial item
window.addEventListener("DOMContentLoaded", () => {
   showPerson()
})

function showPerson() {
   let item = reviews[currentItem];
   img.src = item.img
   author.textContent = item.name
   about.textContent = item.job
   talk.textContent = item.text
}

// btn event listeners
nextBtn.addEventListener("click", () => {

   currentItem++;

   if (currentItem > reviews.length - 1) {
      currentItem = 0;
   }
   showPerson()
})
prevBtn.addEventListener("click", () => {
   currentItem--;

   if (currentItem < 0) {
      currentItem = reviews.length - 1;
   }

   showPerson()
})
randomBtn.addEventListener("click", () => {
   currentItem = Math.floor(Math.random() * reviews.length);
   showPerson()
})
