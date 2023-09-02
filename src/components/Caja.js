export default class Caja extends HTMLElement {
  express = false
  number
  clientId = 'Sin clientes'
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.express = this.hasAttribute('express')
    this.number = this.getAttribute('number')
  }

  static get observedAttributes () {
    return ['client']
  }

  static Styles = /* Css */`
    :host{
      padding: 10px;
      text-align: center;
    }
    h2{
      padding: 0;
      margin: 0;
    }
    h3{
      font-weight: lighter 
    }
    span{
      display:inline-block;
    }
  `
  connectedCallback () {
    this.render()
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'client') {
      if (newValue === '') {
        this.clientId = 'Sin clientes'
        this.render()
      } else {
        this.clientId = newValue
        this.render()
      }
    }
  }

  render () {
    this.shadowRoot.innerHTML = /* HTML */`
      <style>${Caja.Styles}</style>
      <h2>${this.express === true ? `Caja ${this.number} <br>(express)` : `Caja ${this.number}`}</h2>
      <h3>${this.clientId}</h3>
    `
  }
}

customElements.define('cinema-caja', Caja)
