// Componenete (Elemento html) de Caja
export default class Caja extends HTMLElement {
  express = false
  number

  clientId = 'Sin clientes'
  clientTickets = ''

  clients = []
  cajasTimeouts = []
  time = 0
  timer
  timerInterval
  allTickets = []
  allTime = []
  spanTimer
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
   
  `
  connectedCallback () {
    this.render()
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'client') {
      const parsedData = JSON.parse(newValue)
      if (parsedData.id === '') {
        this.clientId = 'Sin clientes'
        this.render()
      }
      this.clients.push(parsedData)
      this.clientId = parsedData.id
      this.clientTickets = parsedData.tickets
      this.render()
    }
  }

  render () {
    this.shadowRoot.innerHTML = /* HTML */`
      <style>${Caja.Styles}</style>
      <h2>${this.express === true ? `Caja ${this.number} <br>(express)` : `Caja ${this.number}`}</h2>
      <span>${this.clientTickets ? `Tickets: ${this.clientTickets}` : ''}</span>
      <h3>${this.clientId}</h3>
    `
    this.spanTimer = this.shadowRoot.querySelector('cinema-timer')
  }
}

customElements.define('cinema-caja', Caja)
