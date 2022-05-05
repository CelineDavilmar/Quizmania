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

function displayQuestion() {
    $(".question").html(questionList[questionIndex].question);
    $('.answerOptions').empty();
    for (i = 0; i < 4; i++) {
        var radioBtn = $('<input type="radio" name="rbtnOptions" class="radiobtn"/>');
        radioBtn.appendTo('.answerOptions');
        var answers = $(document.createElement('label')).prop({
            type: 'label',
            innerHTML: questionList[questionIndex].options[i],
            class: 'label'
        })
        answers.appendTo('.answerOptions');
    }
  
}

$(document).ready(function () {
    $('.nxtButton').hide();

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
        questionIndex++;
        if (questionIndex < questionList.length) {
            displayQuestion();
        }

        var x = $("input[type=radio]:checked").val();
        console.log(x);

    });


});

