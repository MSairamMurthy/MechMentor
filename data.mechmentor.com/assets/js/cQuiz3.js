
const quizData3 = [
    {
      question: 'What type of molding defect occurs when the sand mold breaks or cracks during pouring?',
      options: ['Shrinkage porosity', 'Sand inclusion', 'Mold shift', 'Metal penetration'],
      answer: 'Mold shift',
    },
    {
      question: 'Which of the following molding defects is characterized by the presence of small, rounded cavities on the casting surface?',
      options: ['Shrinkage porosity', 'Gas porosity.', 'Cold shut', 'Hot tear'],
      answer: 'Gas porosity.',
    },
    {
      question: 'What causes the molding defect known as "sand inclusion"?',
      options: ['Insufficient venting of gases', 'Excessive moisture in the sand mold.', 'Inadequate pouring temperature', 'Poor sand compaction'],
      answer: 'Excessive moisture in the sand mold.',
    },
    {
      question: 'Which of the following defects occurs when the mold cavity is not completely filled with molten metal?',
      options: ['Cold shut', 'Hot tear', 'Misrun.', 'Sand inclusion'],
      answer: 'Misrun.',
    },
    {
      question: 'What causes the molding defect known as "scab"?',
      options: [
        ' Inadequate venting of gases',
        'Excessive moisture in the sand mold',
        'Metal penetration into the sand mold.',
        'Incomplete fusion of adjacent layers of metal',
      ],
      answer: 'Metal penetration into the sand mold.',
    },
    {
      question: 'Which of the following defects is caused by the premature solidification of metal before the mold is completely filled?',
      options: ['Shrinkage porosity', 'Cold shut.', 'Hot tear', 'Mold shift'],
      answer: 'Cold shut.',
    },
    {
      question: 'What causes the molding defect known as "rat tail"?',
      options: [
        'Insufficient pouring temperature',
        'Inadequate gating system design',
        'Excessive moisture in the sand mold',
        'Incomplete filling of mold cavities.',
      ],
      answer: 'Incomplete filling of mold cavities.',
    },
    {
      question: 'Which of the following molding defects is characterized by rough, irregular projections on the casting surface?',
      options: ['Scab', 'Flash.', 'Metal penetration', 'Sand inclusion'],
      answer: 'Flash.',
    },
    {
      question: 'What causes the molding defect known as "run out"?',
      options: [
        'Inadequate venting of gases',
        'Excessive pouring temperature',
        ' Improper gating system design',
        ' Inadequate mold strength.',
      ],
      answer: ' Inadequate mold strength.',
    },
    {
      question: 'Which of the following defects occurs when the metal solidifies before completely filling the mold cavity, resulting in a lack of fusion between adjacent layers?',
      options: ['Shrinkage porosity', 'Misrun', 'Cold shut.', 'Hot tear'],
      answer: 'Cold shut.',
    },
  ];
  const quizContainer3 = document.getElementById('quiz3');
  const resultContainer3 = document.getElementById('result3');
  const submitButton3 = document.getElementById('submit3');
  const retryButton3 = document.getElementById('retry3');
  const showAnswerButton3 = document.getElementById('showAnswer3');

  var courseCompletionEnable=document.getElementById('courseCompletionDoc')
//   courseCompletionEnable.classList.add('container', 'mt-5', 'd-flex', 'justify-content-between', 'd-none')
  
  let currentQuestion_3 = 0;
  let score_3 = 0;
  let incorrectAnswers_3 = [];
  
  function shuffleArray3(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion3() {
    const questionData = quizData3[currentQuestion_3];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'QuizQuestion';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'QuizOptions';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray3(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'QuizOption';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz1';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer3.innerHTML = '';
    quizContainer3.appendChild(questionElement);
    quizContainer3.appendChild(optionsElement);
  }
  
  function checkAnswer3() {
    const selectedOption = document.querySelector('input[name="quiz1"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData3[currentQuestion_3].answer) {
        score_3++;
      } else {
        incorrectAnswers_3.push({
          question: quizData3[currentQuestion_3].question,
          incorrectAnswer: answer,
          correctAnswer: quizData3[currentQuestion_3].answer,
        });
      }
      currentQuestion_3++;
      selectedOption.checked = false;
      if (currentQuestion_3 < quizData3.length) {
        displayQuestion3();
      } else {
        displayresult3();
      }
    }
  }
  
  function displayresult3() {
    quizContainer3.style.display = 'none';
    submitButton3.style.display = 'none';
    retryButton3.style.display = 'inline-block';
    showAnswerButton3.style.display = 'inline-block';
    resultContainer3.innerHTML = `You scored ${score_3} out of ${quizData3.length}!`;


    if (score_3 >= 8) {
      progressBar.style.width = '100%'; // Set progress bar to 33% width
      progressBar.innerHTML = '100%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '100'); // Update aria-valuenow attribute
      progressBar.classList.add('bg-success'); // Add green color
    } else {
      progressBar.style.width = '66%'; // Set progress bar to 0% width
      progressBar.innerHTML = '66%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '0'); // Update aria-valuenow attributescore_2>=8
    }


    if(score_3>=8){           
        courseCompletionEnable.classList.add('container', 'mt-5', 'd-flex', 'justify-content-between')
        courseCompletionEnable.classList.remove('d-none')

      }else{
        courseCompletionEnable.classList.add('container', 'mt-5', 'd-flex', 'justify-content-between', 'd-none')

      }
  }
  
  function retryQuiz3() {
    currentQuestion_3 = 0;
    score_3 = 0;
    incorrectAnswers_3 = [];
    quizContainer3.style.display = 'block';
    submitButton3.style.display = 'inline-block';
    retryButton3.style.display = 'none';
    showAnswerButton3.style.display = 'none';
    resultContainer3.innerHTML = '';
    displayQuestion3();

    if (score_3 >= 8) {
      progressBar.style.width = '100%'; // Set progress bar to 33% width
      progressBar.innerHTML = '100%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '100'); // Update aria-valuenow attribute
   
      progressBar.classList.add('bg-success'); // Add green color
    } else {
      progressBar.style.width = '66%'; // Set progress bar to 0% width
      progressBar.innerHTML = '66%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '0'); // Update aria-valuenow attribute
     
    }

    if(score_3>=8){           
        courseCompletionEnable.classList.add('container', 'mt-5', 'd-flex', 'justify-content-between')
        courseCompletionEnable.classList.remove('d-none')

      }else{
        courseCompletionEnable.classList.add('container', 'mt-5', 'd-flex', 'justify-content-between', 'd-none')

      }
  }
  
  function showAnswer3() {
    quizContainer3.style.display = 'none';
    submitButton3.style.display = 'none';
    retryButton3.style.display = 'inline-block';
    showAnswerButton3.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers_3.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers_3[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers_3[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers_3[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer3.innerHTML = `
      <p>You scored ${score_3} out of ${quizData3.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;

    if (score_3 >= 8) {
      progressBar.style.width = '100%'; // Set progress bar to 33% width
      progressBar.innerHTML = '100%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '100'); // Update aria-valuenow attribute
     
      progressBar.classList.add('bg-success'); // Add green color
    } else {
      progressBar.style.width = '66%'; // Set progress bar to 0% width
      progressBar.innerHTML = '66%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '0'); // Update aria-valuenow attribute
     
    }

    if(score_3>=8){           
        courseCompletionEnable.classList.add('container', 'mt-5', 'd-flex', 'justify-content-between')
        courseCompletionEnable.classList.remove('d-none')

      }else{
        courseCompletionEnable.classList.add('container', 'mt-5', 'd-flex', 'justify-content-between', 'd-none')

      }
  }
  
  submitButton3.addEventListener('click', checkAnswer3);
  retryButton3.addEventListener('click', retryQuiz3);
  showAnswerButton3.addEventListener('click', showAnswer3);
  
  displayQuestion3();