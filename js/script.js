let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

//seta nome na div logado no site
let userLogado=JSON.parse( localStorage.getItem('userLogado'))

let logado=document.querySelector('#logado')
logado.innerHTML= ` Olá ${userLogado.nome}` 



if(localStorage.getItem('token')==null){
    alert('Voce Precisa está autenticado para acessar essa pagina')
    window.location.href='http://127.0.0.1:5500/login.html'
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href='http://127.0.0.1:5500/index.html'
}



