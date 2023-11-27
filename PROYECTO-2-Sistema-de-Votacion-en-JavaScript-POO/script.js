// POO - Encuestas
class Encuesta {
    constructor(preguntas, opciones) {
        this.preguntas = preguntas;
        this.opciones = opciones;
        this.votos = Array(preguntas.length).fill(0);
    }

    votar(pregunta, opcion) {
        const indicePregunta = this.preguntas.indexOf(pregunta);
        if (indicePregunta !== -1) {
            const indiceOpcion = this.opciones[indicePregunta].indexOf(opcion);
            if (indiceOpcion !== -1) {
                this.votos[indicePregunta]++;
                console.log(`Voto registrado para ${pregunta} - ${opcion}`);
            } else {
                console.log(`La opción '${opcion}' no es válida para la pregunta '${pregunta}'.`);
            }
        } else {
            console.log(`La pregunta '${pregunta}' no existe en la encuesta.`);
        }
    }

    resultados() {
        const resultados = {};
        for (let i = 0; i < this.preguntas.length; i++) {
            resultados[this.preguntas[i]] = {
                opciones: this.opciones[i],
                votos: this.votos[i]
            };
        }
        return resultados;
    }
}

// Crear una encuesta con 8 preguntas y opciones de respuesta
const preguntas = [
    '¿Cual es tu color favorito?',
    '¿Te gusta la musica Pop?',
    '¿Qué te parece el servicio de streaming Spotify?',
    '¿Como se llama el presidente actual de México (2023)?',
    '¿Quien es Willy Wonka?',
    '¿De que color era el caballo blanco de Napoleon?',  
    '¿Como se llama el satelite natural de la Tierra?',
    '¿Que pildora eliges NEO?'
];

const opciones = [
    ['ROJO', 'VERDE', 'AMARILLO'],
    ['Sí', 'No'],
    ['Excelente', 'Bueno', 'Regular', 'Malo'],
    ['AMLO', 'Chicharito', 'Peña Nieto', 'Cuahutemoc Blanco'],
    ['Un Chocolatero', 'Un Conquistador', 'Un Blanco Con Privilegios'],
    ['Blanco', 'Verde', 'Negro', 'Azul'],
    ['Saturno', 'Júpiter', 'La Luna', 'Neptuno'],
    ['AZUL', 'ROJA',],	
    // Agrega opciones para las demás preguntas según sea necesario
];

let encuesta = new Encuesta(preguntas, opciones);

// Ejemplo de uso:
encuesta.votar('¿Cual es tu color favorito?', 'ROJO');
encuesta.votar('¿Te gusta la musica Pop?', 'Sí');
encuesta.votar('¿Qué te parece el servicio de streaming Spotify?', 'Bueno');
encuesta.votar('¿Como se llama el presidente actual de México (2023)?', 'Cuahutemoc Blanco');
encuesta.votar('¿Quien es Willy Wonka?', 'Un Chocolatero');
encuesta.votar('¿De que color era el caballo blanco de Napoleon?', 'Blanco');
encuesta.votar('¿Como se llama el satelite natural de la Tierra?', 'La Luna');
encuesta.votar('¿Que pildora eliges NEO?', 'ROJA');

console.log(encuesta.resultados());
