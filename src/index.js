import style from './style.css'
import logo from './assets/webpack.svg'
import gemini from './assets/saga-kanon.png'


//sayHi()
//document.getElementById('app').innerHTML = `<img src="${logo}" alt="Webpack">`;

const app = document.getElementById('app')
const title = document.createElement('h1')
const logoImage = document.createElement('img')
const img = document.createElement('img')

title.textContent = "Hello Webpack"
logoImage.src = logo
logoImage.classList.add('icon')
img.src = gemini

app.appendChild(title)
app.appendChild(logoImage)
app.appendChild(img)


