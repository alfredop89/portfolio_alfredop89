let darkButton = document.createElement('div')

darkButton.classList.add('dark-button')
darkButton.innerHTML = `
                        <i id="moon-button" class="fa-solid fa-moon"></i>
`
body.appendChild(darkButton)

darkButton.onclick = () =>{

    let moon = document.querySelector('#moon-button')
    let bio = document.querySelector('.bio')
    let habilidades = document.querySelector('#habilidades')
    let steps = document.querySelector('.steps')
    let stepNumber = document.querySelector('.step-number')
    let spanTitle = document.querySelector('.span-title')
    let proyectos = document.querySelector('.proyectos')
    let footer = document.querySelector('footer')

    moon.classList.toggle('dark-button-active')
    darkButton.classList.toggle('dark-button-active')

    bio.classList.toggle('dark-theme')
    habilidades.classList.toggle('dark-theme')
    steps.classList.toggle('dark-theme')
    footer.classList.toggle('dark-theme')
    spanTitle.classList.toggle('dark-theme')
    proyectos.classList.toggle('dark-theme')
    footer.style.borderTop = '5px solid aqua'
}