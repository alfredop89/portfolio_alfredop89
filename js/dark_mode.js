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
    let footer = document.querySelector('footer')

    moon.classList.toggle('dark-button-active')
    darkButton.classList.toggle('dark-button-active')

    bio.classList.toggle('dark-theme')
    habilidades.classList.toggle('dark-theme')
    footer.classList.toggle('dark-theme')


}