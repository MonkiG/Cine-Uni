// Componenete (Elemento html) de Cine
export default class Cinema extends HTMLElement {
  cajaExpress = 1

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.cajaExpress = Number(this.getAttribute('express-caja'))
  }

  static Styles = `
    :host{
      height: 100%;
      display: block;
    }
    :host > div {
      background-color: #242424;
      display: flex;
      justify-content: space-evenly;
    }
    span {
      position: absolute;
      right: 50px
    }
  `
  static get observedAttributes () {
    return ['express-caja', 'timer']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'express-caja') {
      this.cajaExpress = Number(newValue)
      this.render()
    }

    if (name === 'timer') {
      this.shadowRoot.querySelector('span').innerHTML = newValue
    }
  }

  connectedCallback () {
    this.render()
  }

  render () {
    let cajas = ''

    for (let i = 1; i <= 5; i++) {
      if (i === this.cajaExpress) {
        cajas += `<cinema-caja number=${i} express></cinema-caja>`
      } else {
        cajas += `<cinema-caja number=${i}></cinema-caja>`
      }
    }

    // express.shadowRoot.innerHTML += '(express)'
    this.shadowRoot.innerHTML = /* HTML */`
      <style>${Cinema.Styles}</style>
      <div>
        ${cajas}
      </div>
      <span> </span>
      <cinema-client-list new-client></cinema-client-list>
    `
  }
}

customElements.define('app-cinema', Cinema)
