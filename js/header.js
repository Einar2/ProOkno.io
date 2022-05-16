let mainH = document.querySelector(".header").offsetHeight;
let header = document.querySelector(".nav_a");

window.addEventListener('scroll', function() {
    let y = window.pageYOffset;
    if(y >= mainH){
            header.style.display = "block";

            header.classList.add("nav_active");
            header.classList.remove("nav_close");
        
    }
    else{
        header.classList.add("nav_close");
        
        header.classList.remove("nav_active");
        setTimeout(() => {
            header.style.display = "none";
        }, 100)
        
    }
})