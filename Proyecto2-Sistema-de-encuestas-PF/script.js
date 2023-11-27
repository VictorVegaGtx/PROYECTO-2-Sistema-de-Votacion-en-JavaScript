// Funciones para manejar las encuestas
function crearEncuesta(preguntas, opciones) {
    const votos = Array(preguntas.length).fill(0);

    function votar(pregunta, opcion) {
        const indicePregunta = preguntas.indexOf(pregunta);
        if (indicePregunta !== -1) {
            const indiceOpcion = opciones[indicePregunta].indexOf(opcion);
            if (indiceOpcion !== -1) {
                votos[indicePregunta]++;
                console.log(`Voto registrado para ${pregunta} - ${opcion}`);
            } else {
                console.log(`La opción '${opcion}' no es válida para la pregunta '${pregunta}'.`);
            }
        } else {
            console.log(`La pregunta '${pregunta}' no existe en la encuesta.`);
        }
    }

    function resultados() {
        const resultados = {};
        for (let i = 0; i < preguntas.length; i++) {
            resultados[preguntas[i]] = {
                opciones: opciones[i],
                votos: votos[i]
            };
        }
        return resultados;
    }

    return {
        votar,
        resultados
    };
}

// Crear una encuesta con 8 preguntas y opciones de respuesta
const preguntasPF = [
    '¿Cual es tu color favorito?',
    '¿Te gusta la musica Pop?',
    '¿Qué te parece el servicio de streaming Spotify?',
    '¿Como se llama el presidente actual de México (2023)?',
    '¿Quien es Willy Wonka?',
    '¿De que color era el caballo blanco de Napoleon?',  
    '¿Como se llama el satelite natural de la Tierra?',
    '¿Que pildora eliges NEO?'
];

const opcionesPF = [
    ['ROJO', 'VERDE', 'AMARILLO'],
    ['Sí', 'No'],
    ['Excelente', 'Bueno', 'Regular', 'Malo'],
    ['AMLO', 'Chicharito', 'Peña Nieto', 'Cuahutemoc Blanco'],
    ['Un Chocolatero', 'Un Conquistador', 'Un Blanco Con Privilegios'],
    ['Blanco', 'Verde', 'Negro', 'Azul'],
    ['Saturno', 'Júpiter', 'La Luna', 'Neptuno'],
    ['AZUL', 'ROJA'],	
    // Agrega opciones para las demás preguntas según sea necesario
];

const encuestaPF = crearEncuesta(preguntasPF, opcionesPF);

// Ejemplo de uso:
encuestaPF.votar('¿Cual es tu color favorito?', 'ROJO');
encuestaPF.votar('¿Te gusta la musica Pop?', 'Sí');
encuestaPF.votar('¿Qué te parece el servicio de streaming Spotify?', 'Bueno');
encuestaPF.votar('¿Como se llama el presidente actual de México (2023)?', 'Cuahutemoc Blanco');
encuestaPF.votar('¿Quien es Willy Wonka?', 'Un Chocolatero');
encuestaPF.votar('¿De que color era el caballo blanco de Napoleon?', 'Blanco');
encuestaPF.votar('¿Como se llama el satelite natural de la Tierra?', 'La Luna');
encuestaPF.votar('¿Que pildora eliges NEO?', 'ROJA');

console.log(encuestaPF.resultados());
