import CinemaController from './../classes/CinemaController'

// Componenete (Elemento html) de CinemaContext (Encargado de inicializar la logica)
export default class CinemaContext extends HTMLElement {
  appCinema
  appModal
  modalButtons
  cinemaController
  cajaExpress
  cajas
  cinemaClientList

  constructor () {
    super()
    this.attachShadow({ mode: 'open' }) // Permite modificar el shadow dom
  }

  // Metodo de los custom elements que se ejecuta cuando se inserta el elemento en el html
  connectedCallback () {
    this.render()
    this.#domSelectorsAsignation() // Asigna en variables los elementos html
    this.#modalButtonsListener()
  }

  #init () {
    // Instancea la logica del cine
    this.cinemaController = new CinemaController(undefined, this.cajaExpress, this.cajas, this.cinemaClientList)
    // Ejecuta el metodo para iniciar el cine
    this.cinemaController.open(this.appCinema)
  }

  #domSelectorsAsignation () {
    this.appModal = this.shadowRoot.querySelector('app-modal')
    this.modalButtons = this.appModal.shadowRoot.querySelectorAll('button')
    this.appCinema = this.shadowRoot.querySelector('app-cinema')
  }

  #domCajasSelectorsAsignation () {
    this.cajas = this.appCinema.shadowRoot.querySelectorAll('cinema-caja:not([express])')
    this.cajaExpress = this.appCinema.shadowRoot.querySelector('[express]')
    this.cinemaClientList = this.appCinema.shadowRoot.querySelector('cinema-client-list')
  }

  #modalButtonsListener () {
    const self = this
    // A cada boton del modal se le asigna el evento click
    this.modalButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const cajaNumber = this.attributes['data-number'].value // Obtiene el numero de caja
        self.appCinema.setAttribute('express-caja', cajaNumber) // Establece cual es la caja express
        self.appModal.remove() // Cierra el modal
        self.#domCajasSelectorsAsignation() // Guarda las elementos html en una variable
        self.#init() // Inicia la logica del cine
      })
    })
  }

  render () {
    this.shadowRoot.innerHTML = /* HTML */`
    <app-modal></app-modal>
    <app-cinema express-caja="1"></app-cinema>
    `
  }
}

customElements.define('cinema-context', CinemaContext)
