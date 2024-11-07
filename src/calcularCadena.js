export default function calcularCadena(cadena) {
  if (cadena === '') return 0;

  // Definir delimitadores por defecto
  let delimitadores = [',', '-'];

  // Verificar si hay un delimitador personalizado
  if (cadena.startsWith('//')) {
    const partes = cadena.split('\n');
    const delimitador = partes[0].substring(2); // Obtener el delimitador

    // Asegurarse de que los delimitadores múltiples se manejen correctamente
    delimitadores = delimitador
      .split('][')
      .map(d => d.replace(/\[|\]/g, '')); // Extraer los delimitadores y limpiar los corchetes
    cadena = partes.slice(1).join('\n'); // Eliminar la primera línea de delimitadores
  }

  // Reemplazar todos los delimitadores por coma
  delimitadores.forEach(del => {
    // Escapar correctamente los caracteres especiales en el delimitador
    const regex = new RegExp(del.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), 'g');
    cadena = cadena.replace(regex, ',');
  });

  // Convertir la cadena en un array de números, ignorando cualquier valor mayor a 1000
  const numeros = cadena.split(',').map(num => parseInt(num)).filter(num => num <= 1000);

  // Sumar los números
  return numeros.reduce((suma, num) => suma + num, 0);
}
