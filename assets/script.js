var questionIndex = 0;
var answerIndex = 1;
let score = 0;

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
        ans: "var date = current",
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
        var radioBtn = $('<input type="radio" name="selection" id="radiobtn" class="radiobtn" value="' + questionList[questionIndex].options[i] + '"/>');
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
    $('.result_box').hide();

    $('#start, .restart').click(function () {

        $('.rule_box').hide();
        $('.nxtButton').show();
        $('.quiz_box').show();
        $('#ansPrompt').hide()
        displayQuestion();

        secondsRemaining = 150;
        timeHandler = setInterval(countdownTimer, 1000);

        function countdownTimer() {
            document.getElementById('timer').innerHTML = "You have " + secondsRemaining + " seconds left";
            secondsRemaining--;

            if (secondsRemaining < 0) {
                clearInterval(timeHandler);
                alert("Times up.");
                $('.quiz_box').hide()
                $('.result_box').show();
                $('#ansSelect').show();

            }
        }

    });

    $('.nxtButton').append(
        $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Continue',
            class: 'contbtn',
        })
    );


    $('.contbtn').click(function () {

        $('input[type="radio"]:checked').each(function () {

            $('#ansPrompt').hide()
            let id = answerIndex++;
            let value = $(this).val();
            localStorage.setItem(id, value);

            var answerChoice = $(document.createElement('li')).prop({
                type: 'li',
                innerHTML: value,
                class: 'answerChoices',
                value: "text"
            })
            answerChoice.appendTo('#ansSelect');

            var correctChoice = $(document.createElement('li')).prop({
                type: 'li',
                innerHTML: questionList[questionIndex].ans,
                class: 'correctanswerChoices',
                value: "text"
            })
            correctChoice.appendTo('#correctSelect');

            if (value != questionList[questionIndex].ans) {
                secondsRemaining = secondsRemaining - 15;
            } else {
                score++;
            }
            questionIndex++;

            if ((questionIndex < questionList.length) && (value.length > 0)) {
                displayQuestion();

            } else {
                $('.quiz_box').hide()
                $('.result_box').show();
                $('#ansSelect').show();
                clearInterval(timeHandler);
                document.getElementById('score').innerHTML = "Your score is " + score + " !";

            }
        });


    });



});

