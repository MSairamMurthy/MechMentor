const quizData2 = [
    {
      question: 'What type of casting process involves pouring molten metal into a permanent mold?',
      options: ['Sand casting', 'Investment casting', 'Permanent mold casting.', 'Die casting'],
      answer: 'Permanent mold casting.',
    },
    {
      question: 'Which casting process uses a pattern made of wax that is coated with a ceramic material?',
      options: ['Sand casting', 'Investment casting.', 'Die casting', 'Centrifugal casting'],
      answer: 'Investment casting.',
    },
    {
      question: 'In which casting process is a mold made of sand and then the mold cavity is formed by a pattern made of metal or wood?',
      options: ['Investment casting', 'Permanent mold casting', 'Die casting', 'Sand casting.'],
      answer: 'Sand casting.',
    },
    {
      question: 'Which casting process involves rotating a mold at high speeds to force molten metal into the mold cavity?',
      options: ['Investment casting', 'Centrifugal casting.', 'Die casting', 'Continuous casting'],
      answer: 'Centrifugal casting.',
    },
    {
      question: 'What type of casting process uses a two-part mold made of sand that is compacted around a pattern?',
      options: [
        'Shell molding.',
        'Die casting',
        'Lost foam casting',
        'Split mold',
      ],
      answer: 'Shell molding.',
    },
    {
      question: 'Which casting process is commonly used for producing complex shapes with thin walls and fine details?',
      options: ['Die casting.', 'Continuous casting', 'Centrifugal casting', 'Lost foam casting'],
      answer: 'Die casting.',
    },
    {
      question: 'What type of casting process involves pouring molten metal into a foam pattern that vaporizes upon contact, leaving a cavity in the shape of the desired part?',
      options: [
        'Lost foam casting.',
        'Investment casting',
        'Centrifugal casting',
        'Shell molding',
      ],
      answer: 'Lost foam casting.',
    },
    {
      question: 'In which casting process is molten metal continuously poured into a mold, allowing for the continuous production of metal shapes?',
      options: ['Shell molding', 'Die casting', 'Continuous casting.', 'Centrifugal casting'],
      answer: 'Continuous casting.',
    },
    {
      question: 'What type of casting process uses a metal mold that is cooled to solidify the molten metal rapidly?',
      options: [
        'Investment casting',
        'Permanent mold casting',
        'Die casting.',
        'Lost foam casting',
      ],
      answer: 'Die casting.',
    },
    {
      question: 'Which casting process is commonly used for producing cylindrical shapes such as pipes and tubes?',
      options: ['Centrifugal casting.', 'Shell molding', 'Investment casting', 'Continuous casting'],
      answer: 'Centrifugal casting.',
    },
  ];
  
  
  const quizContainer2 = document.getElementById('quiz2');
  const resultContainer2 = document.getElementById('result2');
  const submitButton2 = document.getElementById('submit2');
  const retryButton2 = document.getElementById('retry2');
  const showAnswerButton2 = document.getElementById('showAnswer2');

    // var secondBtnLaunchH = document.getElementById('button2T');
    var thirdBtnLaunchH = document.getElementById('button3T');
    // secondBtnLaunchH.disabled=false;
    thirdBtnLaunchH.disabled=true;
  
  let currentQuestion_2 = 0;
  let score_2 = 0;
  let incorrectAnswers_2 = [];
  
  function shuffleArray2(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion2() {
    const questionData = quizData2[currentQuestion_2];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'QuizQuestion';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'QuizOptions';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray2(shuffledOptions);
  
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
  
    quizContainer2.innerHTML = '';
    quizContainer2.appendChild(questionElement);
    quizContainer2.appendChild(optionsElement);
  }
  
  function checkAnswer2() {
    const selectedOption = document.querySelector('input[name="quiz1"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData2[currentQuestion_2].answer) {
        score_2++;
      } else {
        incorrectAnswers_2.push({
          question: quizData2[currentQuestion_2].question,
          incorrectAnswer: answer,
          correctAnswer: quizData2[currentQuestion_2].answer,
        });
      }
      currentQuestion_2++;
      selectedOption.checked = false;
      if (currentQuestion_2 < quizData2.length) {
        displayQuestion2();
      } else {
        displayresult2();
      }
    }
    
  }
  
  function displayresult2() {
    quizContainer2.style.display = 'none';
    submitButton2.style.display = 'none';
    retryButton2.style.display = 'inline-block';
    showAnswerButton2.style.display = 'inline-block';
    resultContainer2.innerHTML = `You scored ${score_2} out of ${quizData2.length}!`;

    
    if (score_2 >= 8) {
      progressBar.style.width = '66%'; 
      progressBar.innerHTML = '66%'; 
      progressBar.setAttribute('aria-valuenow', '33'); 
      progressBar.classList.add('bg-success'); 
    } else {
      progressBar.style.width = '33%'; 
      progressBar.innerHTML = '33%'; 
      progressBar.setAttribute('aria-valuenow', '0'); 
  
    }


    if(score_2>=8){
        thirdBtnLaunchH.disabled=false;   
       
      }else{
        thirdBtnLaunchH.disabled=true;
        
      }
  }
  
  function retryQuiz2() {
    currentQuestion_2 = 0;
    score_2 = 0;
    incorrectAnswers_2 = [];
    quizContainer2.style.display = 'block';
    submitButton2.style.display = 'inline-block';
    retryButton2.style.display = 'none';
    showAnswerButton2.style.display = 'none';
    resultContainer2.innerHTML = '';
    displayQuestion2();

    if (score_2 >= 8) {
      progressBar.style.width = '66%'; 
      progressBar.innerHTML = '66%'; 
      progressBar.setAttribute('aria-valuenow', '33'); 
    
      progressBar.classList.add('bg-success'); 
    } else {
      progressBar.style.width = '33%'; 
      progressBar.innerHTML = '33%'; 
      progressBar.setAttribute('aria-valuenow', '0'); 
    }


    if(score_2>=8){
        thirdBtnLaunchH.disabled=false;      
       
      }else{
        thirdBtnLaunchH.disabled=true;
        
      }
  }
  
  function showAnswer2() {
    quizContainer2.style.display = 'none';
    submitButton2.style.display = 'none';
    retryButton2.style.display = 'inline-block';
    showAnswerButton2.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers_2.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers_2[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers_2[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers_2[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer2.innerHTML = `
      <p>You scored ${score_2} out of ${quizData2.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;

    if (score_2 >= 8) {
      progressBar.style.width = '66%'; // Set progress bar to 33% width
      progressBar.innerHTML = '66%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '33'); // Update aria-valuenow attribute
      progressBar.classList.add('bg-success'); // Add green color
    } else {
      progressBar.style.width = '33%'; // Set progress bar to 0% width
      progressBar.innerHTML = '33%'; // Update text inside the progress bar
      progressBar.setAttribute('aria-valuenow', '0'); // Update aria-valuenow attribute
    }


    if(score_2>=8){
        thirdBtnLaunchH.disabled=false;
      
      }else{
        thirdBtnLaunchH.disabled=true;
   
      }
  }
  
  submitButton2.addEventListener('click', checkAnswer2);
  retryButton2.addEventListener('click', retryQuiz2);
  showAnswerButton2.addEventListener('click', showAnswer2);
  
  displayQuestion2();