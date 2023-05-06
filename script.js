const questions = [
    {

    'que': 'What does CSS stands for?',
    'a': 'cascading style sheet',
    'b': 'commom style sheet',
    'c': 'compare style sheet',
    'd': 'computer style sheet',
    'correct': 'a'
    
},

    {

    'que': 'Which of the following is the JavaScript framework?',
    'a': 'python',
    'b': 'C++',
    'c': 'Java',
    'd': 'react',
    'correct': 'd'

    },

    {

        'que': 'Which is the markup language?',
        'a': 'CSS',
        'b': 'JavaScript',
        'c': 'Angular',
        'd': 'HTML',
        'correct': 'd'

    }
    
]

const index = 0;
const right = 0;
const wrong = 0;
const total = questions.length;
const questionEl = document.querySelector(".question");
const optionEl = document.querySelectorAll(".option");
const buttonEl = document.querySelector(".btn");
const notificationEl = document.querySelector(".notification");

const loadInputs = ()=>{
    reset();
    const data = questions[index];
    questionEl.innerText = `${index+1} ) ${data.que}`;
    optionEl[0].nextElementSibling.innerText = data.a;
    optionEl[1].nextElementSibling.innerText = data.b;
    optionEl[2].nextElementSibling.innerText = data.c;
    optionEl[3].nextElementSibling.innerText = data.d;
    
    
}

const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;

    }
    else{
        wrong++;
    }
    index++;
    loadInputs();
    return;
}
const getAnswer = ()=>{
    optionEl.forEach((input)=>{
        if(input.checked){
            return(input.value);
        }
    })    

}

const reset = ()=>{
    optionEl.forEach((input)=>{
        input.checked = false;
    })
}
//Initial commit.
loadInputs();



