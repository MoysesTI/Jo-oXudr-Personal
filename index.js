const contact = document.querySelector('.contact')
const menuCloser = document.querySelector('.menu-closer')
const nav =  document.querySelector('.nav-a')
const produtos = document.querySelector('.planos-sell')
const navbars = document.querySelector('.navBar');

contact.addEventListener('click', ()=>{
    document.querySelector('.forms-container').style.display = 'flex'
})

menuCloser.addEventListener('click', ()=>{
    document.querySelector('.forms-container').style.display = 'none'
    headeradd()
    ofEndOn()
})


produtos.addEventListener('click', ()=>{
    document.querySelector('.produtos').style.display = 'block'
    document.querySelector('main').style.display = 'none'
    headeraRemove()
    ofEndOn()
})

// onscroll header color sed
    window.onscroll = function() {myFunction()};
    let header = document.querySelector('header');
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
            headeradd()
        } else {
            headeraRemove()
            ofEndOn()
        }
}

// navegation

function menu(){
    if(navbars.classList.contains('off_End_Onn')){
        ofEndof()
        headeradd()
    }else{
        headeraRemove()
        ofEndOn()
    }
}


const ofEndOn = () =>{
    navbars.classList.add('off_End_Onn');
}
const ofEndof = () =>{
    navbars.classList.remove('off_End_Onn');
}

const headeradd = ()=>{
    header.classList.add("sticky");
}

const headeraRemove= ()=>{
    header.classList.remove("sticky");
}