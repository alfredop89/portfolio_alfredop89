let bannerText = document.querySelector('.banner-text')
let cloud = document.querySelector('.cloud-img')
let cloudTwo = document.querySelector('.cloud-two')
let logo = document.querySelector('.logo-sec')


window.addEventListener('scroll', () => {
    let value = window.scrollY
    bannerText.style.marginBottom = value * 0.9 + 'px'
    cloud.style.transform = 'translateX(' + value * -0.5 + 'px)'
    cloudTwo.style.transform = 'translateX(' + value * 0.5 + 'px)'
    logo.style.transform = 'translateY(' + value * 8 + 'deg)'
})