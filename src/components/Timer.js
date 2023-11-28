import formatTime from '../helpers/formatTime'

// Esta clase no se uso por cuestiones de tiempo xDXDXDXD
export default class Timer extends HTMLElement {
  time = 1000
  unit
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.time = this.#verifyTime(this.getAttribute('time'))
  }

  static Styles = /* Css */`
    :host{
        color: white;

    }
  `
  // static get observedAttributes () {
  //   return ['time']
  // }

  // attributeChangedCallback (name, oldValue, newValue) {
  //   if (name === 'time') {
  //     this.time = newValue
  //     this.shadowRoot.querySelector('span').innerHTML = this.time
  //   }
  // }

  #verifyTime (time /* STRING */) {
    const data = time.split(' ')
    const unit = data[1].toLocaleLowerCase()
    const timeParsered = Number(data[0])

    if (isNaN(timeParsered)) throw new Error('Invald time value')

    if (unit === 'milisegundos' || unit === 'milisegundo') {
      this.unit = unit
      return timeParsered
    }

    if (unit === 'segundos' || unit === 'segundo') {
      this.unit = unit
      return timeParsered * 1000
    }

    if (unit === 'minutos' || unit === 'minuto') {
      this.unit = unit
      return timeParsered * 60 * 1000
    }

    if (unit === 'horas' || unit === 'hora') {
      this.unit = unit
      return timeParsered * 60 * 60 * 1000
    }

    // if(time <)
  }

  #init () {
    setInterval(() => {
      this.time -= 1000
      this.render()
    }, 1000)
  }

  connectedCallback () {
    this.#init()
  }

  render () {
    this.shadowRoot.innerHTML = /* Html */`
        <style>${Timer.Styles}</style>
        <span>${formatTime(this.time)}</span>
    `
  }
}

customElements.define('cinema-timer', Timer)
