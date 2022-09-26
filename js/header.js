let header = document.querySelector('.header')
let logoBrand = document.querySelector('.logo-brand')
let menuBar = document.querySelector('.bar-nav')


window.onscroll = () =>{
    if(window.scrollY > 120){
        header.classList.add('dark-header')
        logoBrand.innerHTML = `
        <a class="navbar-brand" href="index.html"><img class="img-fluid logo" src="./assets/img/logo_white.png" alt=""></a>
        `
    }
    else if (window.scrollY === 0){
        header.classList.remove('dark-header')
        logoBrand.innerHTML = `
        <a class="navbar-brand" href="index.html"><img class="img-fluid logo" src="./assets/img/logo_white.png" alt=""></a>
        `
        
    }
    let progress = document.querySelector('.progressBar')
    
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let load = document.documentElement.scrollTop / windowHeight * 100

    progress.style.width = load + '%'
    

}
menuBar.onclick = () =>{
    header.classList.add('dark-header')
}