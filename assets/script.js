  
var questionList = {

    qnum1: {
      question: "What does HTML stand for?",
      ans: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
      ]
  },
    qnum2: {
      question: "What does CSS stand for?",
      ans: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
      ]
  },
    qnum3: {
      question: "What year was JavaScript created?",
      ans: "1995",
      options: [
        "1996",
        "2001",
        "1995",
        "2000"
      ]
  },
    qnum4: {
      question: "Which one is not a JavaScript Conditional?",
      ans: "If And Statement",
      options: [
        "If Statement",
        "If And Statement",
        "Else Statement",
        "Else If Statement"
      ]
  },
    qnum: {
      question: "How to declare a variable in JavaScript?",
      ans: "eXtensible Markup Language",
      options: [
        "a = 5;",
        "const name = cat;",
        "let score = won",
        "var date = current"
      ]
  },
   qnum: {
    question: "Which one is not a JavaScript Operator",
    ans: "^",
    options: [
      "+",
      "*",
      "^",
      "-"
    ]
 },
};

$(document).ready(function() {
  $('.nxtButton').hide();

    $("#start").click(function () {

      var sec = 150;
      var time = setInterval(countdownTimer, 1000);

    function countdownTimer() {
        document.getElementById('timer').innerHTML = "You have " + sec + " seconds left";
        sec--;

      if (sec == -1) {
        clearInterval(time);
        alert("Times up.");
        location.reload();

    } else {
      //wrong answer choosen -15 seconds
    }
}

      
      $('.info_box').hide();
      $('.nxtButton').show();
      $(".question").html(questionList.qnum.question);
      $(".answerOptions").html(

        function multipleChoice() {
        for (i = 0; i < 4; i++) {
          var radioBtn = $('<input type="radio" name="rbtnOptions" class="radiobtn"/>');
          $('.radiobtn').html(questionList.qnum.options)
          radioBtn.appendTo('.answerOptions');
    }
  });
  
    });

    $('.nxtButton').append(
      $(document.createElement('button')).prop({
        type: 'button',
        innerHTML: 'Continue',
        class: 'contbtn',
      })
    );

    $('.contbtn').click(function(){
        console.log("clickeddd")
        $(".question").html(questionList.qnum2.question);
        $(".answerOptions").html(questionList.qnum2.options);
        for (i = 0; i < 4; i++) {
          var radioBtn = $('<input type="radio" name="rbtnOptions" />');
          radioBtn.appendTo('.answerOptions');
      }
    });

    var $el = $('<h2>' + item.question[i] + '</h2>');
    $('.question').append($el);

});

 /* for (var options in questionList.qnum) {
        if (questionList.qnum.hasOwnProperty(options)) {
            console.log(questionList.qnum[options]);
      }
            
    } */
    /* $("#radio").click(function () {
        $('.answerOptions').html($.data(this).options);
        for (var i = 0; i < options.length; i++) {
          var optionName = "A" + i;
          var value = i;
          var create = $('<input type="radio" value="' + value + '"><label>' + optionName + '</label><br>');
          $(".answerOptions").append(create);

        }
      }); */

/* questionList.forEach((optionValue, i) => {
  var labelValue = document.createElement('label');
  labelValue.innerHTML = optionValue;
  var inputValue = document.createElement('input');
  inputValue.type = "radio";
  inputValue.name = optionValue;
  inputValue.optionValue = i;
  document.body.appendChild(labelValue);
  document.body.appendChild(inputValue);
  }); */