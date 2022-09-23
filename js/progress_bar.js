let barContainer = document.createElement('div')
let body = document.querySelector('body')

barContainer.classList.add('barContainer')

barContainer.innerHTML = `
                        <div class="progressBar"></div>

`
body.appendChild(barContainer)
