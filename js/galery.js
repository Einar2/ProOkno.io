let mainG = document.querySelector('#gal_main');
let img = document.querySelectorAll('.gal_i');
let galBack = document.querySelectorAll('#gal_back');
let item = ["gal_1G", "gal_2G", "gal_3G", "gal_4G", "gal_5G", "gal_6G"]



//img.forEach(el => {
//    el.onclick = function(el) { 
//            console.log(el)
//        mainG.className = `${item[el.i]}`;
//         
//    };
//})



for(let i =0; i < img.length; i++){
    img[i].addEventListener('click', (e) => {
        mainG.className = `${item[i]}`;
    })
}
