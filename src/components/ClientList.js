export default class ClientList extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = /* HTML */`
        <ul>
        </ul>
    `
  }
}

customElements.define('cinema-client-list', ClientList)
