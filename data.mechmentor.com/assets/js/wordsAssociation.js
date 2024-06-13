const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        correct: 1,
        option: ['molding', 'machining'],
        quiz: ['sand', 'die', 'investment'],
    },
    {
        correct: 2,
        option: ['brittle', 'ductile'],
        quiz: ['tensile strength', 'elasticity', 'plasticity'],
    },
    {
        correct: 1,
        option: ['annealing', 'welding'],
        quiz: ['hardening', 'tempering', 'quenching'],
    },
    {
        correct: 1,
        option: ['alloy', 'polymers'],
        quiz: ['ferrous', 'non-ferrous', 'composition'],
    },
    {
        correct: 2,
        option: ['extrusion', 'lost wax'],
        quiz: ['pattern', 'core', 'shell'],
    },
    {
        correct: 2,
        option: ['blast', 'cupola'],
        quiz: ['melting', 'iron', 'charge'],
    },
    {
        correct: 1,
        option: ['porosity', 'tensile'],
        quiz: ['shrinkage', 'cracks', 'inclusions'],
    },
    {
        correct: 2,
        option: ['die casting', 'green sand'],
        quiz: ['cope', 'drag', 'flask'],
    },
];

let clicked = []
let score = 0

scoreDisplay.textContent = score


function populateQuestions() {
  questions.forEach((question) => {
    const questionBox = document.createElement('div')
    questionBox.classList.add('question-box')

   

    question.quiz.forEach((tip) => {
      const tipText = document.createElement('p')
      tipText.textContent = tip
      tipText.style.color = 'white'
        tipText.style.fontSize = '15px'
        tipText.style.marginTop = '14px'
      questionBox.append(tipText)
    })

    const questionButtons = document.createElement('div')
    questionButtons.classList.add('question-buttons')
    questionBox.append(questionButtons)

    question.option.forEach((option, optionIndex) => {
      const questionButton = document.createElement('button')
      questionButton.classList.add('question-button')
      questionButton.textContent = option
      questionButton.addEventListener('click', () =>
        checkAnswer(
          questionBox,
          questionButton,
          option,
          optionIndex + 1,
          question.correct
        )
      )
      questionButtons.append(questionButton)
    })
    const answerDisplay = document.createElement('div')
    answerDisplay.classList.add('answer-display')

    questionBox.append(answerDisplay)
    questionDisplay.append(questionBox)
  })
}

populateQuestions()

function checkAnswer(
  questionBox,
  questionButton,
  option,
  optionIndex,
  correctAnswer
) {
  if (optionIndex === correctAnswer) {
    score++
    scoreDisplay.textContent = score
    addResult(questionBox, 'Correct!', 'correct')
    let canvas = document.createElement("canvas");
    
    let container = document.getElementsByClassName("button-wrapper")[0];
    canvas.width = 600;
    canvas.height = 600;
    container.appendChild(canvas);
    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
  } 
  else {
    score--
    scoreDisplay.textContent = score
    addResult(questionBox, 'Wrong!', 'wrong')
  }
  clicked.push(option)
  questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
  const answerDisplay = questionBox.querySelector('.answer-display')
  answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent = answer
}