import getRandomInt from '../helpers/getRandomInt'

export default class CinemaController {
  time // Number
  clientTime
  isOpen = false
  isClosed = true
  interval

  constructor (time = 3) {
    this.time = time * 60 * 1000
  }

  open (timer) {
    // this.isOpen = true
    // this.isClosed = false
    this.#openInterval(timer)
    this.#clientInterval()
  }

  #openInterval (timer) {
    this.interval = setInterval(() => {
      const time = this.#formatTime()
      timer.setAttribute('timer', time)
      if (this.time === 0) {
        clearInterval(this.interval)
        setTimeout(() => {
          this.close()
        }, 1000)
      }
    }, 1000)
  }

  #clientInterval () {
    this.clientTime = getRandomInt(1000, 5000)
    return setInterval(() => {
      console.log(this.clientTime)
      console.log('here')
    }, this.clientTime)
  }

  #formatTime () {
    this.time = this.time - 1000
    const minutes = Math.floor(this.time / 60000)
    const seconds = ((this.time % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }

  close () {
    this.isOpen = false
    this.isClosed = true
    console.log('Cinema closed')
    alert('Cine closed')
  }
}
