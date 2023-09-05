// Esta clase no se uso por cuestiones de tiempo xDXDXDXD
export default class Timer extends HTMLElement {
  time
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.time = this.getAttribute('time')
  }

  static Styles = /* Css */`
    :host{
        color: white;

    }
  `
  static get observedAttributes () {
    return ['time']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    console.log('here')
    if (name === 'time') {
      this.time = newValue
      this.shadowRoot.querySelector('span').innerHTML = this.time
    }
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = /* Html */`
        <style>${Timer.Styles}</style>
        <span>${this.time ? this.time : '0:00'}</span>
    `
  }
}

customElements.define('cinema-timer', Timer)
