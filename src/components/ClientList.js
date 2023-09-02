export default class ClientList extends HTMLElement {
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
    :host > div{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      padding: 25px
    }
    ul{
      padding: 0;
      margin: 0;
      background-color: none;
    }
    li{
      margin-left: 20px
    }
  `
  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = /* HTML */`
      <style>${ClientList.Styles}</style>
      <h4>Cola de clientes</h4>
      <div>
        <div>
          <h5>Clientes</h5>
          <ul>
            <li id="id-1">Elemento 1</li>
            <li id="id-2">Elemento 2</li>
            <li id="id-3">Elemento 3</li>
            <li id="id-4">Elemento 4</li>
            <li id="id-5">Elemento 5</li>
          </ul>
        </div>
        <div>
          <h5>Clientes express</h5>
          <ul>
            <li id="id-1">Elemento 1</li>
            <li id="id-2">Elemento 2</li>
            <li id="id-3">Elemento 3</li>
            <li id="id-4">Elemento 4</li>
            <li id="id-5">Elemento 5</li>
          </ul>
        </div>
      </div>
      
    `
  }
}

customElements.define('cinema-client-list', ClientList)
