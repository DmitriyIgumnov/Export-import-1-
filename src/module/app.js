import {JSButton} from './button'
import { getRandomColor} from './utils'

export default function initApp() {
    console.log('Hello world')
    const jsButton = new JSButton
    const JSButtonHTML = jsButton.render()

    JSButtonHTML.addEventListener ('click', function() {
        return getRandomColor()        
    })

    document.body.append(JSButtonHTML)

}