
// la funcion tendra un parametro min que sera 0 en caso de que no se quiera un rango de valores ([0, max))
export default function getRandomInt(min = 0, max){

    // Mat.random genera numeros decimales pseudoaleatorios
    // Math.floot redondea hacia abajo un numero decimal
    // (max-min + 1) es el rango de numeros en el que se generara
    // el + min desplaza el rango a [min, max) en lugar de [0, max)

    return Math.floor(Math.random() * (max-min +1)) + min 
}