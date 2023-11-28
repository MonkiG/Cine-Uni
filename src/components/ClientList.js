// Componenete (Elemento html) de la lista de clientes
export default class ClientList extends HTMLElement {
  clientList

  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static Styles = /* Css */`
    :host {
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 5px

    }
    :host div {
      margin:auto;
      border: 1px solid black;
      width: 50%
    }

    h5{
      margin: 0;
      padding: 10px;
      align-items:center;
      border-bottom: 1px solid black;
    }
    ul{
      padding: 0;
      margin: 0;
      background-color: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      height: 350px;
      overflow-y: auto;
    }
    li{
      margin-left: 20px;
     
    }
  `
  static get observedAttributes () {
    return ['new-client', 'delete-client', 'delete-client-express']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'new-client') {
      const id = JSON.parse(newValue).id
      this.clientList.innerHTML += `<li id="${id}">${id}</li>`
    }

    if (name === 'delete-client') {
      const clientId = newValue
      // Encuentra el elemento 'li' con el ID correspondiente y elimínalo
      const clientToRemove = this.shadowRoot.getElementById(`${clientId}`)
      if (clientToRemove) {
        clientToRemove.remove()
      }
    }

    /** TODO
     * Refactor
     */
    if (name === 'delete-client-express') {
      const clientId = newValue

      // Encuentra los elementos 'li' con el ID correspondiente y elimínalo
      const clientToRemove = this.shadowRoot.querySelectorAll(`#${clientId}`)
      if (clientToRemove) {
        clientToRemove.forEach(client => client.remove())
      }
    }
  }

  connectedCallback () {
    this.render()
    this.clientList = this.shadowRoot.querySelector('[data-rol="client"] ul')
  }

  render () {
    this.shadowRoot.innerHTML = /* HTML */`
      <style>${ClientList.Styles}</style>
      <h4>Cola de clientes</h4>
      <div data-rol="client">
        <h5>Clientes</h5>
        <ul>
           
        </ul>
      </div>
      
    `
  }
}

customElements.define('cinema-client-list', ClientList)
/* <div data-rol="express-client">
<h5>Clientes express</h5>
<ul>

</ul>
</div> */
