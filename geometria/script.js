
const questions = [
    {
        question: "¿Cuál es la fórmula de la distancia entre dos puntos en el plano cartesiano?",
        options: ["√((x2 - x1)^2 + (y2 - y1)^2)", "x2 - x1 + y2 - y1", "x2 * y2 - x1 * y1", "(x2 - x1) * (y2 - y1)"],
        answer: "√((x2 - x1)^2 + (y2 - y1)^2)"
    },
    {
        question: "¿Cuál es la ecuación de una recta en su forma general?",
        options: ["Ax + By + C = 0", "y = mx + b", "x^2 + y^2 = r^2", "y = a(x - h)^2 + k"],
        answer: "Ax + By + C = 0"
    },
    {
        question: "¿Cuál es la fórmula de la pendiente de una recta que pasa por dos puntos (x1, y1) y (x2, y2)?",
        options: ["(y2 - y1) / (x2 - x1)", "(x2 - x1) / (y2 - y1)", "(y2 + y1) / (x2 + x1)", "(x2 + x1) / (y2 + y1)"],
        answer: "(y2 - y1) / (x2 - x1)"
    },
    {
        question: "El punto P₁ tiene su abscisa igual a su ordenada. Si las coordenadas de P₂ son: (2; 8) y la distancia P₁ P₂ vale 6 unidades, hallar las coordenadas de P₁.",
        options: ["(8,8) y (2,2)","(2,4) y(0,0)", "(6,6) y (3,3) ", "(4,4) y (12, 12) "],
        answer: "(8,8) y (2,2)"
    },
    {
        question: "Calcula las coordenadas de los puntos de trisección del segmento cuyos extremos son los puntos dados S y T: S(5/2,-1/2) T(-2,1)",
        options: ["(1/2, -1/2) y (-1/2, 1/2)", "(4, -1) y (-1, 2)", "(1/4, -1/4) y (-1/4, 1/4)", "(2, -1) y (-1/2, 1)"],
        answer: "(1/2, -1/2) y (-1/2, 1/2)"
    },
    {
        question: "Encuentra la ecuación de la circunferencia circunscrita en el triángulo, cuyos vértices son los puntos A(3,-2), B(1,2) y C(-5,-4)",
        options: ["(x+1.33)^2 + (y+1.67)^2 = 18.9", "(x-3)^2 + (y+2)^2 = 9", "(x+1.33)^2 + (y+1.67)^2 = 9", "(x-3)^2 + (y+2)^2 = 18.9"],
        answer: "(x+1.33)^2 + (y+1.67)^2 = 18.9"
    },
    {
        question: "Determina la ecuación del lugar geométrico de los puntos del plano cuyas sumas de distancias a los puntos fijos F₁(0,3) y F₂(0,-3), son siempre iguales a 10 unidades.",
        options: ["25x + 16y - 4000", "16x + 25y - 4000", "x^2 + y^2 = 100", "25x^2 + 16y^2 = 4000"],
        answer: "25x + 16y - 4000"
    },
    {
        question: "¿Cuál es la ecuación de la circunferencia con centro en el origen y que pasa por el punto (2,-3)?",
        options: ["x^2 + y^2 = 13u^2", "x^2 + y^2 = 5u^2", "x^2 + y^2 = 10u^2", "x^2 + y^2 = 4u^2"],
        answer: "x^2 + y^2 = 13u^2"
    },
    {
        question: "Un punto se mueve de tal manera que la suma de sus distancias a los puntos (4,0) y (-4,0) es igual a 12",
        options: ["(x^2)/36 + (y^2)/20 = 1", "x^2 + y^2 = 12", "x^2 - 4x + y^2 = 12", "x^2 + y^2 = 144"],
        answer: "(x^2)/36 + (y^2)/20 = 1"
    },
    {
        question: "Una circunferencia tiene su centro en el eje x y pasa por los puntos (-1,5) y (2,3). Determina su ecuación",
        options: ["(x+2.17)^2 + y^2 = 26.32", "(x+2)^2 + y^2 = 25", "(x-2.17)^2 + y^2 = 26.32", "(x-2)^2 + y^2 = 25"],
        answer: "(x+2.17)^2 + y^2 = 26.32"
    },
    {
        question: "Una circunferencia tiene su centro en (0,-2) y es tangente a la recta 5x - 12y + 2 = 0. ¿Cuál es su ecuación?",
        options: ["x^2 + (y+2)^2 = 4", "x^2 + (y+2)^2 = 16", "x^2 + (y+2)^2 = 2", "x^2 + (y+2)^2 = 4"],
        answer: "x^2 + (y+2)^2 = 4"
    },
    {
        question: "Determina la ecuación de la circunferencia cuyo centro es el punto de intersección de las rectas 2x - 3y - 6 = 0 y 3x + y + 13 = 0, además, es tangente a la recta 5x + 12y - 106 = 0.",
        options: ["(x+3)^2 + (y+4)^2 = 169", "(x-3)^2 + (y+4)^2 = 169", "(x+3)^2 + (y-4)^2 = 169", "(x-3)^2 + (y-4)^2 = 169"],
        answer: "(x+3)^2 + (y+4)^2 = 169"
    },
    {
        question: "Determina la ecuación de la recta, cuya distancia al origen es 12/5 unidades y pasa por el punto A(0,-3)",
        options: ["3x - 4y - 12 = 0", "3x + 4y + 12 = 0", "3x + 4y - 12 = 0", "3x - 4y + 12 = 0"],
        answer: "3x + 4y + 12 = 0"
    },
    {
        question: "Encuentra la ecuación de la circunferencia concéntrica x^2 + y^2 - 4x + 6y = 11 y tangente a la recta 3x - 4y + 17 = 0",
        options: ["(x-2)^2 + (y+3)^2 = 49", "(x+2)^2 + (y+3)^2 = 49", "(y-2)^2 + (y-3)^2 = 49", "(x+2)^2 + (y-3)^2 = 49"],
        answer: "(x-2)^2 + (y+3)^2 = 49"
    },
    {
        question: "Halla la ecuación de una elipse horizontal de centro en el origen de coordenadas y de eje mayor 8 unidades. Si al unir los extremos del lado recto con el centro de la elipse, el triángulo formado es equilátero.",
        options: ["(x^2)/16 + (y^2)/7 = 1", "(x^2)/64 + (y^2)/49 = 1", "(x^2)/49 + (y^2)/64 = 1", "(x^2)/7 + (y^2)/16 = 1"],
        answer: "(x^2)/16 + (y^2)/7 = 1"
    },
    {
        question: "Halla la ecuación de una hipérbola de focos F₁=(3,2) y F₂=(-7,2) y cuyo eje principal tiene de longitud 8",
    options: [
        "(x+2)^2/16 - (y-2)^2/9 = 1",
        "(x-3)^2/16 - (y-2)^2/9 = 1",
        "(x+3)^2/16 - (y+2)^2/9 = 1",
        "(x-2)^2/16 - (y+2)^2/9 = 1"
    ],
    answer: "(x+2)^2/16 - (y-2)^2/9 = 1"
    },
    {
   
    answer: "(x - h)^2 + (y - k)^2 = r^2"
},
{
    question: "¿Cuál es la ecuación de la parábola en términos de la ubicación de su foco?",
    options: [
        "4ay = x^2",
        "4ax = y^2",
        "4bx = y^2",
        "4by = x^2"
    ],
    answer: "4ay = x^2"
},


{
    question: "¿Cuál de las siguientes NO es una de las variantes que puede presentar la parábola con vértice en el origen y foco (a,0) con respecto a los ejes del plano?",
    options: [
        "Parábola vertical con eje focal paralelo al eje y",
        "Parábola horizontal con eje focal paralelo al eje x",
        "Parábola vertical con eje focal paralelo al eje x",
        "Parábola horizontal con eje focal paralelo al eje y"
    ],
    answer: "Parábola vertical con eje focal paralelo al eje x"
},
{
    question: "¿Cuáles son las expresiones para la elipse con centro en el origen y fuera de él?",
    options: [
        "(x^2)/a^2 + (y^2)/b^2 = 1",
        "(x - h)^2/a^2 + (y - k)^2/b^2 = 1",
        "(x^2)/a^2 - (y^2)/b^2 = 1",
        "(x - h)^2/a^2 - (y - k)^2/b^2 = 1"
    ],
    answer: "(x - h)^2/a^2 + (y - k)^2/b^2 = 1"
},
{
    question: "¿Cuál es la expresión para una hipérbola con centro fuera del origen sobre ejes paralelos a X e Y?",
    options: [
        "(x - h)^2/a^2 - (y - k)^2/b^2 = 1",
        "(x - h)^2/a^2 + (y - k)^2/b^2 = 1",
        "(y - k)^2/a^2 - (x - h)^2/b^2 = 1",
        "(y - k)^2/a^2 + (x - h)^2/b^2 = 1"
    ],
    answer: "(x - h)^2/a^2 - (y - k)^2/b^2 = 1"
},
{
    question: "¿Cuáles son las variantes que puede presentar la parábola con vértice fuera del origen con respecto a los ejes del plano?",
    options: [
        "Parábola vertical con eje focal paralelo al eje y, y parábola horizontal con eje focal paralelo al eje x.",
        "Parábola vertical con eje focal paralelo al eje x, y parábola horizontal con eje focal paralelo al eje y.",
        "Parábola vertical con eje focal paralelo al eje y, y parábola horizontal con eje focal paralelo al eje y.",
        "Parábola vertical con eje focal paralelo al eje x, y parábola horizontal con eje focal paralelo al eje y."
    ],
    answer: "Parábola vertical con eje focal paralelo al eje y, y parábola horizontal con eje focal paralelo al eje x."
}
];




let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const startButton = document.getElementById('start-btn');

function loadQuestion() {
    const currentQuestion = getRandomQuestion();
    questionElement.textContent = currentQuestion.question;

    // Barajar las opciones
    const shuffledOptions = shuffleArray(currentQuestion.options);

    optionsContainer.innerHTML = '';
    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(option, currentQuestion.answer));
        optionsContainer.appendChild(optionElement);
    });
}

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        alert('¡Respuesta correcta!');
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta es: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
        loadQuestion();
    } else {
        alert(`¡Juego terminado! Tu puntaje es: ${score}/5`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function startGame() {
    startButton.style.display = 'none';
   loadQuestion();
}

