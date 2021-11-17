window.addEventListener("DOMContentLoaded", () => {
    const start = document.querySelector("#start");
    let submit = document.querySelector("#btnSubmit");
    let reset = document.querySelector("#btnReset");
   const timer = document.querySelector("#time");
  
    let second =60;
    let time;
    function startTime() {
      timer.innerHTML = second + "sec left";
      second--;
      if (second == -1) {
          clearInterval(time);
          alert("Time out!!");
          calculateScore();
      }
    }
  
    function stopTime(){
      clearInterval(time);
  
  }
  
  start.addEventListener("click", function (e) {
    e.preventDefault();
    time = setInterval(startTime,1000);
  //  start.addEventListener("click", function (e) {
      document.querySelector("#quizBlock").style.display = "block";
      start.style.display = "none";
    });
    // submit.addEventListener("click",calculateScore);
    // reset.addEventListener("click",displayQuiz);
  
    // quizArray QUESTIONS & ANSWERS
    // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
    // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
    const quizArray = [
      {
        q: "Which is the third planet from the sun?",
        o: ["Saturn", "Earth", "Pluto", "Mars"],
        a: 1, // array index 1 - so Earth is the correct answer here
      },
      {
        q: "Which is the largest ocean on Earth?",
        o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        a: 3,
      },
      {
        q: "What is the capital of Australia",
        o: ["Sydney", "Canberra", "Melbourne", "Perth"],
        a: 1,
      },
      {
        q: "What is the capital of India?",
        o: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        a: 1,
      },
      {
        q: "What is the national animal of Australia?",
        o: ["Kangaroo", "Wombat", "Emu", "Platypus"],
        a: 0,
      },
    ];
  
    // function to Display the quiz questions and answers from the object
    const displayQuiz = () => {
      const quizWrap = document.querySelector("#quizWrap");
      let quizDisplay = "";
      quizArray.map((quizItem, index) => {
        quizDisplay += `<ul class="list-group">
                     Q - ${quizItem.q}
                      <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                      <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                      <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                      <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                     </ul>
                      <div>&nbsp;</div>`;
        quizWrap.innerHTML = quizDisplay;
      });
    };
  
    // Calculate the score
   
    
    const calculateScore = () => {
      // alert('Its working');
  
      stopTime();
      let score = 0;
      quizArray.map((quizItem, index) => {
        for (let i = 0; i < 4; i++) {
          //highlight the li if it is the correct answer
          let li = `li_${index}_${i}`;
          let r = `radio_${index}_${i}`;
          liElement = document.querySelector("#" + li);
          radioElement = document.querySelector("#" + r);
  
          if (quizItem.a == i) {
            //change background color of li element here
            liElement.style.background = "lightblue";
            
          }
           console.log(radioElement);
          if (radioElement.checked && quizItem.a == i) {
            // code for task 2 goes here 
            // increment the score when user click the correct answer
            score ++;
  
          }
        }
        // displaying score
        let s = document.querySelector("#score")
        s.innerHTML = `Your Score Is:${score}`;
      });
    };
    // call the displayQuiz function
    displayQuiz();
    submit.addEventListener("click",function(){
     calculateScore();
    });
      
    reset.addEventListener("click",refresh);
    function refresh(){
      window.location.reload();
    }
  
  });
  