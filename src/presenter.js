// presenter.js

// Esta es la función que calculará el resultado
export function calcular() {
  const cadena = document.getElementById('cadena').value;  // Obtener la cadena desde el input
  const resultado = procesarCadena(cadena);  // Procesar la cadena
  document.getElementById('resultado').textContent = resultado;  // Mostrar el resultado en el <span>
}

// Función para procesar la cadena (puedes personalizarla según tu necesidad)
function procesarCadena(cadena) {
  if (cadena === '') {
      return 'Por favor ingresa una cadena';  // Si la cadena está vacía
  }
  
  // Ejemplo simple de operación: invertir la cadena
  return cadena.split('').reverse().join('');
}

// Agregar el evento de clic al botón cuando se cargue el archivo
document.getElementById('calcular-btn').addEventListener('click', calcular);
