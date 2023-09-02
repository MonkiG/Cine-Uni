import getRandomInt from '../helpers/getRandomInt'
import Client from './Client'

export default class CinemaController {
  time // Number
  interval
  isOpen = false
  isClosed = true
  clientQueue = []
  clientExpress = []
  expressCaja
  cajas

  constructor (time = 0.5, expressCaja, cajas) {
    this.time = time * 60 * 1000
    this.expressCaja = expressCaja
    this.cajas = cajas
  }

  open (timer) {
    this.isOpen = true
    this.isClosed = false
    this.#openInterval(timer)
    this.#handleExpressClients()
    this.#handleClients()
    // this.#clientInterval()
  }

  #openInterval (timer) {
    this.interval = setInterval(() => {
      const time = this.#formatTime()
      timer.setAttribute('timer', time)
      const clientTimeout = this.#clientInterval()
      if (this.time === 0) {
        clearInterval(this.interval)
        clearTimeout(clientTimeout)
        setTimeout(() => {
          this.close()
        }, 1000)
      }
    }, 1000)
  }

  #clientInterval () {
    const rand = getRandomInt(1, 5) * 1000

    const clientTimeout = setTimeout(() => {
      const numberOfClients = getRandomInt(1, 20)
      for (let i = 1; i <= numberOfClients; i++) {
        const newClient = new Client()
        if (newClient.tickets === 1) {
          this.clientExpress.push(newClient)
        } else {
          this.clientQueue.push(newClient)
        }
      }
    }, rand)

    return clientTimeout
  }

  #formatTime () {
    this.time = this.time - 1000
    const minutes = Math.floor(this.time / 60000)
    const seconds = ((this.time % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }

  #handleExpressClients () {
    const expressClientsInterval = setInterval(() => {
      const firstExpressQueueUser = this.clientExpress.shift()
      const clientAttributeValue = firstExpressQueueUser?.id ?? ''
      this.expressCaja.setAttribute('client', clientAttributeValue)

      if (this.clientExpress.length === 0 && this.isClosed === true) {
        clearInterval(expressClientsInterval)
        this.expressCaja.innerHTML = 'Sin clientes'
      }
    }, 3000)
  }

  #handleClients () {
    const clientsInterval = setInterval(() => {
      this.cajas.forEach((caja) => {
        const firstQueueUser = this.clientQueue.shift()
        const clientAttributeValue = firstQueueUser?.id ?? ''
        caja.setAttribute('client', clientAttributeValue)
      })

      if (this.clientQueue.length === 0 && this.isClosed === true) {
        clearInterval(clientsInterval)
        this.cajas.forEach(caja => {
          caja.innerHTML = 'Sin clientes'
        })
      }
    }, 3000)
  }

  close () {
    this.isOpen = false
    this.isClosed = true
    console.log('Cinema closed')
    clearInterval(this.interval)
    // alert('Cine closed')
  }
}
