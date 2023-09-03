import CinemaController from './../classes/CinemaController'

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
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    this.#domSelectorsAsignation()
    this.#modalButtonsListener()
  }

  #init () {
    this.cinemaController = new CinemaController(undefined, this.cajaExpress, this.cajas, this.cinemaClientList)
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
    this.modalButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const cajaNumber = this.attributes['data-number'].value
        self.appCinema.setAttribute('express-caja', cajaNumber)
        self.appModal.remove()
        self.#domCajasSelectorsAsignation()
        self.#init()
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
