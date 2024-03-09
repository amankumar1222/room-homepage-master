

const hemBurgger = document.querySelector(".toggle img");
const closeBtn = document.querySelector(".close img");
const listItem = document.querySelector(".list-item");

const leftBtn = document.getElementById("leftBtn")
const rightBtn = document.getElementById("rightBtn")

const imgChange = document.querySelector(".img-box")

const headings = document.querySelector(".heading h1")
const para = document.querySelector(".mypara")

let myClass = ["img1", "img2", "img3"]

 let    sections = [
      {
        "heading": "Discover innovative ways to decorate",
        "para": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        "cta": "Shop now"
      },
      {
        "heading": "We are available all across the globe",
        "para": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        "cta": "Shop now"
      },
      {
        "heading": "Manufactured with the best materials",
        "para": "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
      }
    ]

let imgNum = 0
leftBtn.addEventListener("click", ()=>{
    myClass.forEach(className => {
        if (imgChange.classList.contains(className)) {
            imgChange.classList.remove(className);
        }
    });

    if( imgNum >=3){
        imgNum =0
    }

    imgChange.classList.add(myClass[imgNum])
    headings.innerHTML = sections[imgNum].heading
    para.innerHTML = sections[imgNum].para
    if (imgNum >  -1){
        console.log(myClass[imgNum]);
        imgNum ++;
    }
})
rightBtn.addEventListener("click", ()=>{
    myClass.forEach(className => {
        if (imgChange.classList.contains(className)) {
            imgChange.classList.remove(className);
        }
    });

    imgChange.classList.add(myClass[imgNum])
    headings.innerHTML = sections[imgNum].heading
    para.innerHTML = sections[imgNum].para
    if (imgNum >  -1){
        if(imgNum == 0){
            imgNum = 3
        }
        imgNum --;
    }

})

hemBurgger.addEventListener("click", ()=>{
    hemBurgger.classList.toggle("active");
    closeBtn.classList.remove("active");
    listItem.style.display = "flex"
})



closeBtn.addEventListener("click", ()=>{
    listItem.style.display = "none"
    hemBurgger.classList.toggle("active");

})