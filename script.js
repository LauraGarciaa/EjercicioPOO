// EJERCICIO POO 1

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero
    }

    obtDetalles = () => {
        return `Mi nombre es ${this.nombre}, mi edad es ${this.edad} y mi genero es ${this.genero}`
    }
}

const laura = new Persona('Laura','21','mujer')
console.log(laura.obtDetalles())

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso
        this.grupo = grupo
    }
    registrar = () => {
        return `Estoy en ${this.curso} curso y mi grupo es ${this.grupo}`
    }
}
const lauraEstudiante = new Estudiante('Laura', '21', 'mujer', 'primer', 'A')
console.log(lauraEstudiante.registrar())


// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad , genero , asignatura , nivel) {
        super(nombre , edad , genero)
        this.asignatura = asignatura
        this.nivel = nivel
    }
    asignar = () => {
        return `doy la asignatura ${this.asignatura} y el nivel es ${this.nivel}`
    }
}
const pieroProfesor = new Profesor('piero', '28' , 'hombre' , 'programacion' , 'principiante')
console.log(pieroProfesor.asignar())