const btnO = document.querySelectorAll(".btn_a");
const btnC = document.querySelector(".close");
const menu = document.querySelector(".nav_mobile");
const btns = document.querySelectorAll(".nav_items_m a");
btnO.forEach((item) => {
   item.addEventListener("click", () => {
    menu.classList.remove('nav_m_anim');
    menu.classList.remove("nav_m_close");
   }) 
})



btnC.addEventListener('click', () => {
    menu.classList.add('nav_m_anim');
    setTimeout(() => {
       menu.classList.add('nav_m_close');
    },150)
})


btns.forEach((item) =>{
    item.addEventListener('click', () => {
       menu.classList.add('nav_m_anim');
        setTimeout(() => {
           menu.classList.add('nav_m_close');
        },150) 
    })
})