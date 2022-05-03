
$(document).ready(function() {
    // creating an array and passing the number, questions, options, and answers
var questionList = [
    {
    qnumb: 1,
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
    qnumb: 2,
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
    qnumb: 3,
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
    qnumb: 4,
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
    qnumb: 5,
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
   qnumb: 6,
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

questionList.forEach(function(item){
    
    //var $el = $('<h2>' + item.question[i] + '</h2>');
    
    $("#start").click(function(){
        
        $('.info_box').hide();
        $('.question').html($.data(this, item).question);
        $('.answerOptions').html($.data(this, item).options);
        $('.nxtButton').append(
            $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: 'Continue',
                class: 'contbtn',
                click: function () { 
                    console.log("continue button clicked")
                    
                    if(userChoice == ans){
                        timer
                    }else{
                        timer = timer - 15;
                    }
                 }
            })
        );

        
    })

    $('.question').append($el);
   
}, false);
    
    
});
