export class JSButton {
    #container
    
    constructor() {
        this.#container = document.createElement('div')
    }

    render() {
        const button = document.createElement('button')
        button.className = button
        const span = document.createElement('span')
        span.textContent = 'Изменить цвет страницы'
        button.append(span)

        this.#container.append(button)
        
        return this.#container
    }
}