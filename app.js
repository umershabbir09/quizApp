var quizData = [
    {
        quistion : 'what is html' ,
        option : ['hyper markup lanuage' , 'daata' , 'markup' , 'alnight'],
        correct : '0'
    },{
        quistion : 'what is css' ,
        option : ['cascading style sheet' , 'daata' , 'markup' , 'alnight'],
        correct : '0'
    },{
        quistion : 'what is js' ,
        option : ['hyper' , 'daata' , 'markup' , 'programmming languuage'],
        correct : '3'
    },{
        quistion : 'what is dostor' ,
        option : ['hyper markup lanuage' , 'cleanes man' , 'markup' , 'alnight'],
        correct : '1'
    },{
        quistion : 'what is hhhhh' ,
        option : ['hyper markup lanuage' , 'daata' , 'programmming languuage' , 'alnight'],
        correct : '3'
    }
]

let answerInt = document.querySelectorAll('.answer');

console.log(answerInt);

let quizSection = document.getElementById('quiz_section')

let [questionElem , option_1 , option_2 , option_3 , option_4] = document.querySelectorAll('#question , #option_1 , #option_2 , #option_3 , #option_4')



const submitBtn = document.querySelector('#submit')

let currentQuiz = 0

let score = 0

const loadQuiz = () => {

    const { quistion , option} = quizData[currentQuiz];
     console.log(quistion);
     questionElem.innerText = `${currentQuiz + 1} : ${quistion}`
     option.forEach((currentvalue , index) => (window[`option_${index + 1}`].innerText = currentvalue))
}


loadQuiz()


const getSelectedOption = () => {
    let ans_index ;
    answerInt.forEach((value , index) => {
        if (value.checked) {
            ans_index = index
        }
    })
    return ans_index
}

const deSelectedOption = () => {
    return answerInt.forEach((value) => (value.checked = false))
}

submitBtn.addEventListener("click" , () => {
    const selectedOptionIndex = getSelectedOption()
    console.log(selectedOptionIndex);
    

    if (selectedOptionIndex == quizData[currentQuiz].correct) {
        score = score + 1
        console.log('this is score' ,score);
    }

   currentQuiz = currentQuiz + 1

    if (currentQuiz < quizData.length) {
        deSelectedOption()
        loadQuiz()
    }

    else if (score < 3) {
        quizSection.innerHTML = `
           <div class='result' >
              <h2>your score is ${score}/${quizData.length} correct answer</h2>
              <p>your are fail 😢 try again 🔄</p>
              <button class='reload_button' onClick='location.reload()'>Play again</button>
           </div>
        `
   }else{
        quizSection.innerHTML = `
           <div class='result' >
              <h2>your score is ${score}/${quizData.length} correct answer</h2>
              <p>congratulations your successfully complete quiz 😊</p>
              <button class='reload_button' onClick='location.reload()'>Play again</button>
           </div>
        `
    }
})