const questions = [
    {

    'que': 'What does CSS stands for?',
    'a': 'cascading style sheet',
    'b': 'commom style sheet',
    'c': 'compare style sheet',
    'd': 'computer style sheet'
    
},

    {

    'que': 'Which is the JavaScript framework?',
    'a': 'python',
    'b': 'C++',
    'c': 'Java',
    'd': 'react'

    },

    {

        'que': 'Which is the markup language?',
        'a': 'CSS',
        'b': 'JavaScript',
        'c': 'Angular',
        'd': 'HTML'

    }
    
]

const index = 1;
const contentEl = document.querySelector(".content");
const optionEl = document.querySelector(".option");
const loadInputs = ()=>{
    const data = questions[index];
    contentEl.innerText = `${index+1} ${data.que}`;
    optionEl[0].nextElementSiblings.innerText = data.a;
    optionEl[1].nextElementSiblings.innerText = data.b;
    optionEl[2].nextElementSiblings.innerText = data.c;
    optionEl[3].nextElementSiblings.innerText = data.d;
    
    
}