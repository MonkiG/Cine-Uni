import getRandomInt from '../helpers/getRandomInt'

export default class Client {
  id
  name
  tickets
  constructor () {
    this.id = this.#idGenerator()
    this.name = this.#nameGenerator()
    this.tickets = this.#ticketsGenerator()
  }

  #idGenerator () {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const longitud = 8
    let id = ''

    for (let i = 0; i < longitud; i++) {
      const indice = getRandomInt(null, caracteres.length)
      id += caracteres.charAt(indice) // Asigna el caracter que se encuentra en el indice al id
    }

    return id
  }

  #nameGenerator () {
    const nombres = [
      'Juan', 'María', 'Pedro', 'Ana',
      'Carlos', 'Laura', 'Luis', 'Sofía',
      'Diego', 'Elena', 'Miguel', 'Isabel',
      'Andrés', 'Valentina', 'Javier', 'Camila',
      'José', 'Lucía', 'Fernando', 'Carmen',
      'Pablo', 'Valeria', 'Manuel', 'Teresa',
      'Ricardo', 'Lourdes', 'Raúl', 'Diana',
      'Hugo', 'Adriana'
    ]

    const apellidos = [
      'García', 'Rodríguez', 'Martínez',
      'López', 'Hernández', 'González',
      'Pérez', 'Sánchez', 'Ramírez',
      'Torres', 'Flores', 'Díaz',
      'Vargas', 'Rojas', 'Ruiz',
      'Jiménez', 'Luna', 'Silva',
      'Castro', 'Ortega', 'Reyes',
      'Álvarez', 'Morales', 'Espinoza',
      'Fernández', 'Núñez', 'Cruz',
      'Ibarra', 'Molina'
    ]

    // Asigna un nombre de manera aleatoria en forma de string
    const clientName = `${nombres[getRandomInt(null, nombres.length)]}`

    // Asigna dos apellidos de manera aleatoria en forma de string
    const clientLastnames = `${apellidos[getRandomInt(null, nombres.length)]} ${apellidos[getRandomInt(null, nombres.length)]}`

    // Retorna el nombre del cliente y los apellidos uniendolos
    return (`${clientName} ${clientLastnames}`)
  }

  #ticketsGenerator () {
    return getRandomInt(1, 6)
  }
}
