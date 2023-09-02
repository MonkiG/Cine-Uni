import CinemaController from './../classes/CinemaController'

export default class CinemaContext extends HTMLElement {
  appCinema
  appModal
  modalButtons
  cinemaController
  cajaExpress
  cajas
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    this.appModal = this.shadowRoot.querySelector('app-modal')
    this.modalButtons = this.appModal.shadowRoot.querySelectorAll('button')
    this.appCinema = this.shadowRoot.querySelector('app-cinema')
    // this.#cajasSelectors()
    this.#modalButtonsListener()
  }

  //   #cajasSelectors () {
  //     const cajas = this.appCinema.shadowRoot.querySelectorAll('cinema-caja:not([express])')
  //     const h3Elements = []

  //     for (const caja of cajas) {
  //       const h3Element = caja.shadowRoot.querySelector('h3')
  //       h3Elements.push(h3Element)
  //     }

  //     this.cajas = h3Elements
  //   }

  #modalButtonsListener () {
    const self = this
    this.modalButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const cajaNumber = this.attributes['data-number'].value
        self.appCinema.setAttribute('express-caja', cajaNumber)
        self.appModal.remove()
        self.cajas = self.appCinema.shadowRoot.querySelectorAll('cinema-caja:not([express])')
        self.cajaExpress = self.appCinema.shadowRoot.querySelector('[express]')
        self.cinemaController = new CinemaController(undefined, self.cajaExpress, self.cajas)
        self.cinemaController.open(self.appCinema)
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
