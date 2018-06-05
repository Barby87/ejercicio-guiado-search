// Algoritmo linear searcg --> Compara el elemento que buscas con todos los elementos del array. Funciona para array pequeños.

// Binary search --> mmás óptimo que linear search

// Creando función search
const search = (array,element) => {

// Recorriendo array
  for (let i = 0; i < array.length; i++) {

// Comparando elementos del array con el elemento que se busca
    if (array[i] === element) {
  
      return i
    }
  }
}

// Llamando a la función search

console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 7)); // Retorna 6 (valor de la posición del elemento 7)
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 7)); // Retorna undefined, ya que el elemento 10 no existe dentro del arreglo