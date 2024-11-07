import calcularCadena from './calcularCadena';

describe('Calculadora de cadena', () => {
    test('Retorna 0 para una cadena vacía', () => {
        expect(calcularCadena("")).toBe(0);
    });

    test('Retorna el número mismo para una cadena con un solo número', () => {
        expect(calcularCadena("2")).toBe(2);
    });

    test('Suma números separados por coma', () => {
        expect(calcularCadena("1,2")).toBe(3);
    });

    test('Suma números separados por coma o guion', () => {
        expect(calcularCadena("1-2,3")).toBe(6);
    });

    test('Permite delimitadores personalizados', () => {
        expect(calcularCadena("//[;]\n6;7;4")).toBe(17);
    });

    test('Ignora números mayores a 1000', () => {
        expect(calcularCadena("2,1001")).toBe(2);
    });

    test('Permite delimitadores de múltiples caracteres', () => {
        expect(calcularCadena("//[***]\n1***2***3")).toBe(6);
    });

    test('Permite múltiples delimitadores', () => {
        expect(calcularCadena("//[a][b]\n1a2b3,7,9")).toBe(22);
    });
});
