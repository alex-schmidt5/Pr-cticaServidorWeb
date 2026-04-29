    // 1. Clase Circulo
    export class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }

    perimetro() {
        return 2 * Math.PI * this.radio;
    }
    }

    // 2. mayorQue
    export function mayorQue(a, b) {
    if (a > b) return a;
    if (b > a) return b;
    return "Son iguales";
    }

    // 3. filtrar pares
    export function filtrarPares(arr) {
    return arr.filter(n => n % 2 === 0);
    }

    // 4. clase Estudiante
    export class Estudiante {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }

    promedio() {
        const suma = this.notas.reduce((acc, n) => acc + n, 0);
        return suma / this.notas.length;
    }
    }

    // 5. contar ocurrencias
    export function contarOcurrencias(arr, valor) {
    return arr.filter(x => x === valor).length;
    }

    // 6. filtrar por edad
    export function filtrarPorEdad(personas) {
    return personas.filter(p => p.edad >= 18);
    }

    // 7. calcular total carrito
    export function calcularTotal(carrito) {
    return carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    }

    // 8. agrupar por ciudad
    export function agruparPersonasPorCiudad(personas) {
    return personas.reduce((acc, p) => {
        if (!acc[p.ciudad]) acc[p.ciudad] = [];
        acc[p.ciudad].push(p.nombre);
        return acc;
    }, {});
    }