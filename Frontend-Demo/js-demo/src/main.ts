import './style.css'
import typescriptLogo from './typescript.svg'

let counter = 0

const updateDisplay = () => {
  const display = document.querySelector<HTMLDivElement>('#counter-display')!
  display.textContent = counter.toString()
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <img src="${typescriptLogo}" class="logo" alt="TypeScript logo" />
    <h1>Counter App</h1>
    <div class="counter-display" id="counter-display">0</div>
    <div class="button-group">
      <button id="decrement" type="button">Decrement</button>
      <button id="increment" type="button">Increment</button>
    </div>
    <button id="reset" type="button" class="reset-btn">Reset</button>
  </div>
`

document.querySelector<HTMLButtonElement>('#increment')!.addEventListener('click', () => {
  counter++
  updateDisplay()
})

document.querySelector<HTMLButtonElement>('#decrement')!.addEventListener('click', () => {
  counter--
  updateDisplay()
})

document.querySelector<HTMLButtonElement>('#reset')!.addEventListener('click', () => {
  counter = 0
  updateDisplay()
})
