const contact = document.querySelector('.contact')
const menuCloser = document.querySelector('.menu-closer')
contact.addEventListener('click', ()=>{
    document.querySelector('.forms-container').style.display = 'flex'
})

menuCloser.addEventListener('click', ()=>{
    document.querySelector('.forms-container').style.display = 'none'
    header.classList.remove("sticky");
    navbars.classList.add('off_End_Onn');
})

const nav =  document.querySelector('.nav-a')
const produtos = document.querySelector('.planos-sell')
produtos.addEventListener('click', ()=>{
    document.querySelector('.produtos').style.display = 'block'
    document.querySelector('main').style.display = 'none'
    header.classList.remove("sticky");
    navbars.classList.add('off_End_Onn');
})

    window.onscroll = function() {myFunction()};

    let header = document.querySelector('header');
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
        } else {
                header.classList.remove("sticky");
                navbars.classList.add('off_End_Onn');
        }
}
const navbars = document.querySelector('.navBar');
function menu(){
    if(navbars.classList.contains('off_End_Onn')){
        navbars.classList.remove('off_End_Onn');
        header.classList.add("sticky");
    }else{

        header.classList.remove("sticky");
        navbars.classList.add('off_End_Onn');
    }
}

