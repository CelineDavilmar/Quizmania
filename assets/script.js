var questionIndex = 0;

var questionList = [

    {
        question: "What does HTML stand for?",
        ans: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        question: "What does CSS stand for?",
        ans: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        question: "What year was JavaScript created?",
        ans: "1995",
        options: [
            "1996",
            "2001",
            "1995",
            "2000"
        ]
    },
    {
        question: "Which one is not a JavaScript Conditional?",
        ans: "If And Statement",
        options: [
            "If Statement",
            "If And Statement",
            "Else Statement",
            "Else If Statement"
        ]
    },
    {
        question: "How to declare a variable in JavaScript?",
        ans: "eXtensible Markup Language",
        options: [
            "a = 5;",
            "const name = cat;",
            "let score = won",
            "var date = current"
        ]
    },
    {
        question: "Which one is not a JavaScript Operator",
        ans: "^",
        options: [
            "+",
            "*",
            "^",
            "-"
        ]
    },
];

var secondsRemaining;
var timeHandler;
var radioSelector;

function displayQuestion() {
    $(".question").html(questionList[questionIndex].question);
    $('.answerOptions').empty();
    for (i = 0; i < 4; i++) {
        var radioBtn = $('<input type="radio" name="rbtnOptions" id="radiobtn" class="radiobtn" value="' + i +'"/>');
        radioBtn.appendTo('.answerOptions');
        var answers = $(document.createElement('label')).prop({
            type: 'label',
            innerHTML: questionList[questionIndex].options[i],
            class: 'label',
            value: "text"
        })
        answers.appendTo('.answerOptions');
    }
}

$(document).ready(function () {
    $('.nxtButton').hide();
    $('#ansSelect').hide();

    $("#start").click(function () {

        secondsRemaining = 150;
        timeHandler = setInterval(countdownTimer, 1000);

        function countdownTimer() {
            document.getElementById('timer').innerHTML = "You have " + secondsRemaining + " seconds left";
            secondsRemaining--;

            if (secondsRemaining < 0) {
                clearInterval(timeHandler);
                alert("Times up.");
                location.reload();

            } else {
                //wrong answer choosen -15 seconds
            }
        }

        $('.rule_box').hide();
        $('.nxtButton').show();
        displayQuestion();


    });

    $('.nxtButton').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Continue',
            class: 'contbtn',
        })
    );

    $('.contbtn').click(function () {
        
        var radioOptions = document.querySelectorAll('input[type="radio"]');
        let selectedOption;

        for (const radioOption of radioOptions){
          if (radioOption.checked){
            selectedOption = radioOption.value;
            break
          }
        }

        ansSelect.innerText = selectedOption ? `You selected ${selectedOption}` : `You have not made a selection`;


        questionIndex++;

        if ((questionIndex < questionList.length) && (radioOptions.checked)) {
            displayQuestion();
        } else {
          
        }

    });


});

