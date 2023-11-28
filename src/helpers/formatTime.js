export default function formatTime (time) {
  // Calcula horas, minutos y segundos
  const hours = Math.floor(time / 3600)
  const remainingSeconds = time % 3600
  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60

  // Formatea el resultado con dos dígitos para minutos y segundos
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}
