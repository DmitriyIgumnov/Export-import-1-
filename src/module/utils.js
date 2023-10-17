export function getRandomColor() {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16)
    const body = document.querySelector('body')
    body.style.background = color
}

