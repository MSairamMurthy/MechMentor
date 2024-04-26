const quizData1 = [
    {
      question: 'Which of the following is a primary metal casting process used in foundries?',
      options: ['Sand casting', 'Forging', 'Machining', 'Welding'],
      answer: 'Sand casting',
    },
    {
      question: 'Which type of sand is commonly used as a molding material in foundries?',
      options: ['Silica sand', 'Limestone sand', 'Garnet sand', 'Quartz sand'],
      answer: 'Silica sand',
    },
    {
      question: 'What is the purpose of a riser in casting?',
      options: ['To support the mold', 'To vent gases', 'To cool the casting', 'To prevent shrinkage defects'],
      answer: 'To prevent shrinkage defects',
    },
    {
      question: 'Which of the following casting defects is caused by inadequate feeding of the molten metal during solidification?',
      options: ['Porosity', 'Shrinkage cavity', 'Cold shut', 'Misrun'],
      answer: 'Misrun',
    },
    {
      question: 'Which type of mold consists of two halves that are clamped together during the casting process?',
      options: [
        'Shell mold',
        'Investment mold',
        'Permanent mold',
        'Split mold',
      ],
      answer: 'Split mold',
    },
    {
      question: 'What is the purpose of the gating system in a mold?',
      options: ['To provide support to the mold', 'To remove excess gases from the mold', 'To deliver molten metal into the mold cavity', 'To cool the casting after solidification'],
      answer: 'To deliver molten metal into the mold cavity',
    },
    {
      question: 'Which of the following metals is commonly used as a pattern material in foundries?',
      options: [
        'Aluminum',
        'Copper',
        'Wood',
        'Plastic',
      ],
      answer: 'Wood',
    },
    {
      question: 'What is the purpose of a core in casting?',
      options: ['To provide additional strength to the casting', 'To create internal features in the casting', 'To improve surface finish', 'To remove impurities from the molten metal'],
      answer: 'To create internal features in the casting',
    },
    {
      question: 'Which of the following casting processes uses a vacuum to draw molten metal into the mold cavity?',
      options: [
        'Die casting',
        'Centrifugal casting',
        'Vacuum casting',
        'Continuous casting',
      ],
      answer: 'Vacuum casting',
    },
    {
      question: 'Which of the following defects is characterized by the presence of small, rounded cavities on the casting surface?',
      options: ['Shrinkage porosity', 'Gas porosity', 'Hot tear', 'Cold lap'],
      answer: 'Gas porosity',
    },
  ];


  const quizContainer1 = document.getElementById('quiz1');
  const resultContainer1 = document.getElementById('result1');
  const submitButton1 = document.getElementById('submit1');
  const retryButton1 = document.getElementById('retry1');
  const showAnswerButton1 = document.getElementById('showAnswer1');
  const progressBar = document.getElementById('progressBar');

  var secondBtnLaunch = document.getElementById('button2T');
  var thirdBtnLaunch = document.getElementById('button3T');
  secondBtnLaunch.disabled=true;
  thirdBtnLaunch.disabled=true;

 
  
  let currentQuestion_1 = 0;
  let score_1 = 0;
  let incorrectAnswers_1 = [];
  
  function shuffleArray1(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion1() {
    const questionData = quizData1[currentQuestion_1];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'QuizQuestion';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'QuizOptions';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray1(shuffledOptions);
  
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
  
    quizContainer1.innerHTML = '';
    quizContainer1.appendChild(questionElement);
    quizContainer1.appendChild(optionsElement);
  }
  
  function checkAnswer1() {
    const selectedOption = document.querySelector('input[name="quiz1"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData1[currentQuestion_1].answer) {
        score_1++;
      } else {
        incorrectAnswers_1.push({
          question: quizData1[currentQuestion_1].question,
          incorrectAnswer: answer,
          correctAnswer: quizData1[currentQuestion_1].answer,
        });
      }
      currentQuestion_1++;
      selectedOption.checked = false;
      if (currentQuestion_1 < quizData1.length) {
        displayQuestion1();
      } else {
        displayResult1();
      }
    }
  }
  
  function displayResult1() {
    quizContainer1.style.display = 'none';
    submitButton1.style.display = 'none';
    retryButton1.style.display = 'inline-block';
    showAnswerButton1.style.display = 'inline-block';
    resultContainer1.innerHTML = `You scored ${score_1} out of ${quizData1.length}!`;


    
    if (score_1 >= 8) {
      progressBar.style.width = '33%'; // Set progress bar to 33% width
      progressBar.innerHTML = '33%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '33'); // Update aria-valuenow attribute
            progressBar.classList.add('bg-success'); // Add green color
    } else {
      progressBar.style.width = '0%'; // Set progress bar to 0% width
      progressBar.innerHTML = '0%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '0'); // Update aria-valuenow attribute
          }


    if(score_1>=8){
      secondBtnLaunch.disabled=false;      
    }else{
      secondBtnLaunch.disabled=true;
    }

  }
  
  function retryQuiz() {
    currentQuestion_1 = 0;
    score_1 = 0;
    incorrectAnswers_1 = [];
    quizContainer1.style.display = 'block';
    submitButton1.style.display = 'inline-block';
    retryButton1.style.display = 'none';
    showAnswerButton1.style.display = 'none';
    resultContainer1.innerHTML = '';
    displayQuestion1();

    if (score_1 >= 8) {
      progressBar.style.width = '33%'; // Set progress bar to 33% width
      progressBar.innerHTML = '33%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '33'); // Update aria-valuenow attribute
            progressBar.classList.add('bg-success'); // Add green color
    } else {
      progressBar.style.width = '0%'; // Set progress bar to 0% width
      progressBar.innerHTML = '0%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '0'); // Update aria-valuenow attribute
          }

    if(score_1>=8){
      secondBtnLaunch.disabled=false;
      
    }else{
      secondBtnLaunch.disabled=true;
      
    }
  }

  
  
  
  function showAnswer1() {
    quizContainer1.style.display = 'none';
    submitButton1.style.display = 'none';
    retryButton1.style.display = 'inline-block';
    showAnswerButton1.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers_1.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers_1[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers_1[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers_1[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer1.innerHTML = `
      <p>You scored ${score_1} out of ${quizData1.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;

    
    if (score_1 >= 8) {
      progressBar.style.width = '33%'; // Set progress bar to 33% width
      progressBar.innerHTML = '33%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '33'); // Update aria-valuenow attribute
            progressBar.classList.add('bg-success'); // Add green color
    } else {
      progressBar.style.width = '0%'; // Set progress bar to 0% width
      progressBar.innerHTML = '0%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '0'); // Update aria-valuenow attribute
          }

    

    if(score_1>=8){
      secondBtnLaunch.disabled=false;      
    }else{
      secondBtnLaunch.disabled=true;
    } 
  }
  
  submitButton1.addEventListener('click', checkAnswer1);
  retryButton1.addEventListener('click', retryQuiz);
  showAnswerButton1.addEventListener('click', showAnswer1);
  
  displayQuestion1();