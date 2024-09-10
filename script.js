document.getElementById('reg').addEventListener('click', function(){
    document.getElementById('registrationPage').style.display='block'
    document.getElementById('landingpage').style.display='none'
})
document.getElementById('prevwinners').addEventListener('click', function(){
    document.getElementById('pastwinners').style.display='block'
    document.getElementById('landingpage').style.display='none'
})
document.getElementById('login').addEventListener('click', function(){
    document.getElementById('loginpage').style.display='block'
    document.getElementById('landingpage').style.display='none'
})

document.getElementById('registrationPage').addEventListener('submit',function(e){
    e.preventDefault()

    let regdetails ={
        schname: document.getElementById('schname').value,
        address:document.getElementById('address').value,
        email:document.getElementById('email').value,
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        password:document.getElementById('password').value,
    }

    let valid = true

    if(regdetails.schname === ""){
        valid = false
        document.getElementById('schnameerror').style.display= 'block'
    }else if(regdetails.address === ""){
         valid = false
         document.getElementById('schnameerror').style.display= 'none'
         document.getElementById('addresserror').style.display= 'block'
    }else if(regdetails.email === ""){
        valid = false
        document.getElementById('schnameerror').style.display= 'none'
        document.getElementById('addresserror').style.display= 'none'
        document.getElementById('emailerror').style.display= 'block'
    }else if(regdetails.name === ""){
        valid = false
        document.getElementById('schnameerror').style.display= 'none'
        document.getElementById('addresserror').style.display= 'none'
        document.getElementById('emailerror').style.display= 'none'
        document.getElementById('nameerror').style.display= 'block'
    }else if(regdetails.age === ""){
        valid = false
        document.getElementById('schnameerror').style.display= 'none'
        document.getElementById('addresserror').style.display= 'none'
        document.getElementById('emailerror').style.display= 'none'
        document.getElementById('nameerror').style.display= 'none'
        document.getElementById('ageerror1').style.display= 'none'
        document.getElementById('ageerror').style.display= 'block'
    }else if(isNaN(regdetails.age)){
        valid = false
        document.getElementById('schnameerror').style.display= 'none'
        document.getElementById('addresserror').style.display= 'none'
        document.getElementById('emailerror').style.display= 'none'
        document.getElementById('nameerror').style.display= 'none'
        document.getElementById('ageerror').style.display= 'none'
        document.getElementById('ageerror1').style.display= 'block'
    }else if(regdetails.password ===""){
        valid = false
        document.getElementById('schnameerror').style.display= 'none'
        document.getElementById('addresserror').style.display= 'none'
        document.getElementById('emailerror').style.display= 'none'
        document.getElementById('nameerror').style.display= 'none'
        document.getElementById('ageerror').style.display= 'none'
        document.getElementById('ageerror1').style.display= 'none'
        document.getElementById('passworderror').style.display= 'block'
    }
    else{
        localStorage.setItem('QuizRegInfo', JSON.stringify(regdetails))
        alert('Registration succesful')
        document.getElementById('landingpage').style.display = 'block'
        document.getElementById('registrationPage').style.display = 'none'
    }
})


document.getElementById('form2').addEventListener('submit', function(event){
    event.preventDefault();

    let QuizDett = JSON.parse(localStorage.getItem('QuizRegInfo'));

    let loginDetails = {
        loginschoolname: document.getElementById('loginschoolname').value,
        loginname: document.getElementById('loginname').value,
        loginage: document.getElementById('loginage').value,
        loginpassword: document.getElementById('loginpassword').value,
    }

    let valid = true;

    
    if (loginDetails.loginschoolname === "") {
        valid = false;
        document.getElementById('loginschoolnameerror1').style.display = 'block';
        document.getElementById('loginschoolnameerror2').style.display = 'none';
    } else if (loginDetails.loginschoolname !== QuizDett.schname) {
        valid = false;
        document.getElementById('loginschoolnameerror2').style.display = 'block';
        document.getElementById('loginschoolnameerror1').style.display = 'none';
    } else {
        document.getElementById('loginschoolnameerror1').style.display = 'none';
        document.getElementById('loginschoolnameerror2').style.display = 'none';
    }

    
    if (loginDetails.loginname === "") {
        valid = false;
        document.getElementById('loginnameerror').style.display = 'block';
        document.getElementById('botherror').style.display = 'none';
    } else if (loginDetails.loginname !== QuizDett.name) {
        valid = false;
        document.getElementById('loginnameerror').style.display = 'none';
        document.getElementById('botherror').style.display = 'block';
    } else {
        document.getElementById('loginnameerror').style.display = 'none';
        document.getElementById('botherror').style.display = 'none';
    }

    
    if (loginDetails.loginage === "") {
        valid = false;
        document.getElementById('loginageerror1').style.display = 'block';
        document.getElementById('loginageerror2').style.display = 'none';
    } else if (loginDetails.loginage !== QuizDett.age) {
        valid = false;
        document.getElementById('loginageerror1').style.display = 'none';
        document.getElementById('loginageerror2').style.display = 'block';
    } else {
        document.getElementById('loginageerror1').style.display = 'none';
        document.getElementById('loginageerror2').style.display = 'none';
    }

    
    if (loginDetails.loginpassword === "") {
        valid = false;
        document.getElementById('loginpassworderror').style.display = 'block';
    } else if (loginDetails.loginpassword !== QuizDett.password) {
        valid = false;
        document.getElementById('loginpassworderror').style.display = 'none';
        document.getElementById('botherror').style.display = 'block';
    } else {
        document.getElementById('loginpassworderror').style.display = 'none';
        document.getElementById('botherror').style.display = 'none';
    }

    
    if (valid) {
        alert('login successfull')
        document.getElementById('loginpage').style.display="none"
        document.getElementById('questions').style.display="block"            
        localStorage.setItem('loginForQuiz',JSON.stringify(loginDetails))
    }
});



let questions = [
    {ques: "What is the largest known living land animal?", ans1: "African elephant", ans2: "Buffalo", ans3: "Tiger", ans4: "Hippopotamus", correctans: "African elephant"},
    {ques: "What are animals that eat both meat and plants called?", ans1: "Hungry animals", ans2: "Omnivores", ans3: "Wild Animals", ans4: "Carnivorous", correctans: "Omnivores"},
    {ques: "How many elements are in the periodic table?", ans1: "188", ans2: "118", ans3: "250", ans4: "700", correctans: "118"},
    {ques: "What temperature does water boil?", ans1: "212F", ans2: "121F", ans3: "257F", ans4: "170F", correctans: "212F"},
    {ques: "What is the largest internal organ in the human body?", ans1: "The Heart", ans2: "The liver", ans3: "The Kidney", ans4: "The Brain", correctans: "The liver"},
    {ques: "What is the largest desert in the world?", ans1: "Antarctica", ans2: "Sahara", ans3: "Mitochondria", ans4: "Sahel", correctans: "Antarctica"},
    {ques: "What is the process called when a caterpillar turns into a butterfly?", ans1: "Polaris", ans2: "Mercury", ans3: "Metamorphosis", ans4: "Venus", correctans: "Metamorphosis"},
    {ques: "Which group of ancient peoples worshiped cats?", ans1: "Nigerians", ans2: "British", ans3: "Namibians", ans4: "Egyptians", correctans: "Egyptians"},
    {ques: "What country gifted the Statue of Liberty to the United States?", ans1: "France", ans2: "Hungary", ans3: "Paraguay", ans4: "South Africa", correctans: "France"},
    {ques: "What country is known for its great wall?", ans1: "India", ans2: "Morocco", ans3: "China", ans4: "Nigeria", correctans: "China"}
];

let currentQuestion = {};
let score = 0;
let questionsAnswered = 0;
const maxQuestions = 10; // The quiz will end after 10 questions
const pointsPerCorrectAnswer = 5; // Points awarded per correct answer
let timer; // Variable to hold the timer interval
let quizStarted = false; // Flag to check if quiz has started
let timeElapsed = false; // Flag to check if time has elapsed

// Function to display questions randomly without repetition
function displayQuestionsRandomly() {
    if (questionsAnswered < maxQuestions && questions.length > 0) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[randomIndex];

        document.getElementById('mainQuestions').innerHTML = currentQuestion.ques;
        document.getElementById('ans11').innerHTML = currentQuestion.ans1;
        document.getElementById('ans22').innerHTML = currentQuestion.ans2;
        document.getElementById('ans33').innerHTML = currentQuestion.ans3;
        document.getElementById('ans44').innerHTML = currentQuestion.ans4;

        document.getElementById('ans11').setAttribute("data-answer", currentQuestion.ans1);
        document.getElementById('ans22').setAttribute("data-answer", currentQuestion.ans2);
        document.getElementById('ans33').setAttribute("data-answer", currentQuestion.ans3);
        document.getElementById('ans44').setAttribute("data-answer", currentQuestion.ans4);

        // Remove the question to prevent repetition
        questions.splice(randomIndex, 1);
    } else if (questionsAnswered >= maxQuestions) {
        endQuiz(); // End the quiz when all questions are answered
    }
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer) {
    if (selectedAnswer === currentQuestion.correctans) {
        score += pointsPerCorrectAnswer;
    }
    questionsAnswered++;
    if (questionsAnswered >= maxQuestions) {
        endQuiz(); // End the quiz after 10 questions
    } else {
        displayQuestionsRandomly();  // Move to the next question
    }
}

// Function to end the quiz and show the result
function endQuiz() {
    // Clear the timer and hide questions
    clearInterval(timer);
    document.getElementById('mainQuestions').innerHTML = "Quiz Finished!";
    document.getElementById('ans11').style.display = "none";
    document.getElementById('ans22').style.display = "none";
    document.getElementById('ans33').style.display = "none";
    document.getElementById('ans44').style.display = "none";
    
    let QuizDett = JSON.parse(localStorage.getItem('QuizRegInfo'));
    let schoolID = QuizDett.schname;
    let studentName = QuizDett.name;

    
    
    // Calculate and display score
    let percentage = (score / (maxQuestions * pointsPerCorrectAnswer)) * 100;
    document.getElementById('timer').innerHTML = schoolID + ", " + studentName + " Final Score: " + percentage.toFixed(2) + "%";
    document.getElementById('timer').style.display = "block"; // Make sure timer is visible to show final score
    
    if (timeElapsed) {
        document.getElementById('timer').innerHTML = "Time out! " + document.getElementById('timer').innerHTML;
    }

    let popup = setTimeout(() => {
        document.getElementById('questions').style.display= 'none';
    }, 15000);
    document.getElementById('timeoutt').style.display= 'block';

    if (percentage === "0.00%"){
        clearTimeout(popup)
        document.getElementById('timeoutt').style.display= 'none';
    }
}

// Add event listeners to answer buttons
document.getElementById('ans11').addEventListener('click', function() {
    checkAnswer(this.getAttribute('data-answer'));
});
document.getElementById('ans22').addEventListener('click', function() {
    checkAnswer(this.getAttribute('data-answer'));
});
document.getElementById('ans33').addEventListener('click', function() {
    checkAnswer(this.getAttribute('data-answer'));
});
document.getElementById('ans44').addEventListener('click', function() {
    checkAnswer(this.getAttribute('data-answer'));
});

// Start the quiz and timer when login button is clicked
document.getElementById('loginbtn').addEventListener('click', function() {
    if (!quizStarted) {
        quizStarted = true;
        displayQuestionsRandomly(); // Display the first question

        // Timer starts when the quiz starts
        var paste = document.getElementById('timer');
        var sec = 0;
        timer = setInterval(() => {
            if (sec < 120) {
                paste.innerHTML = sec + " seconds";
                sec++;
            } else {
                timeElapsed = true; // Set flag to true
                paste.innerHTML = "Time out!";
                endQuiz(); // End the quiz if the timer runs out
            }
        }, 1000);
    }
});

let QuizDetttt = JSON.parse(localStorage.getItem('QuizRegInfo'));
let schoolID = QuizDetttt.schname;
let studentName = QuizDetttt.name;


var nameeeeee = document.getElementById('nameeeeee');
var schoolllll = document.getElementById('schoolllll');

nameeeeee.innerHTML = studentName
schoolllll.innerHTML = schoolID