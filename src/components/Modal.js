// Componenete (Elemento html) de Modal
export default class Modal extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static Styles = /* Css */`
        :host{
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 1;
            bottom: 0;
            background-color: rgba(0,0,0, .9);
            height: 100vh;
            width: 100%;
        }
        
        h1{
            padding: 0;
            margin: 0;
        }

        :host > div{
            background-color: #a5a5a5;
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        div > div {
            margin-top: 25px
        }
    `

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadowRoot.innerHTML = /* HTML */`
            <style>${Modal.Styles}</style>
            <div>
                <h1>Cinema Gonzales 😎</h1>
                <p>¡Bienvenido a cinema Gonzales!</p>
                <span><b>Escoja la caja express</b></span>
                <div>
                    <button data-number="1">Caja 1</button>
                    <button data-number="2">Caja 2</button>
                    <button data-number="3">Caja 3</button>
                    <button data-number="4">Caja 4</button>
                    <button data-number="5">Caja 5</button>
                </div>
            </div>
        `
  }
}

customElements.define('app-modal', Modal)
