$(document).ready(function() {
var equation = "";

$("table").click(function (event) {
  $("#equation").append(" " + event.target.innerText);

  switch(event.target.id){

    case "equals":

      try {
        var result = eval(equation);
        $("#result").html(result);
        equation = "";
        } catch (exeption) {
            if (exeption instanceof SyntaxError) {
              alert("invalid expression");
            }
          }
      $('#equation').html("");
      break;

    case "AC":
      equation = "";
      $("#result").html("0");
      break;

    case "CE":
      equation = equation.substr(0, equation.length-1);
      //return the same str minus last element
      break;

    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      equation += event.target.innerText;
      break;

    case "dot":
      if (equation.charAt(equation.length-1) != ".") {
              equation += event.target.innerText;
            };
      break;

    case "plus":
      if (equation.charAt(equation.length-1) != "+") {
        equation += event.target.innerText;
      }
      break;

    case "minus":
      if (equation.charAt(equation.length-1) != "-") {
        equation += event.target.innerText;
      }
      break;

    case "divide":
      if (equation.charAt(equation.length-1) != "/") {
        equation += event.target.innerText;
      }
      break;

    case "multiply":
      if (equation.charAt(equation.length-1) != "*") {
        equation += event.target.innerText;
      }
      break;
  }  // switch end

  if (equation.length > 35 ) {
    alert("really? hey, shorter equation is actionable");
  }

  $("#equation").html(equation);
})




// COLOR VERSIONS ON

$("#moreFun").click(function () {

  play();

  $(".op1").hover(function(){
      $(this).css('background-color','#5c9c99');
    }, function() {
      $(this).css('background-color', '#79a5a3');
    }
  );

  $("#AC, #CE").hover(function(){
    $(this).css('background-color','#dea95e');
    }, function() {
    $(this).css('background-color','#f1c689');
  });

  $("#equals").hover(function() {

    $(this).css('background-color', '#3e4555');
    }, function() {
    $(this).css('background-color', '#cd5957');
  });

  $("th").hover(function(){
    $(this).css('font-family', 'Playfair Display, serif');
    $(this).css('background-color','#f1c689');
    }, function() {
    $(this).css('background-color', '#3e4555');
  });

  $("#equation").hover(function(){
    $(this).css('color', 'white')
  });

});

// COLOR VERSIONS OFF

$("#lessFun").click(function () {

  play();

  $(".op1").hover(function(){
      $(this).css('background-color','');
    }, function() {
      $(this).css('background-color', '');
    }
  );

  $("#AC, #CE").hover(function(){
    $(this).css('background-color','');
    }, function() {
    $(this).css('background-color','');
  });

  $("#equals").hover(function() {

    $(this).css('background-color', '');
    }, function() {
    $(this).css('background-color', '');
  });

  $("th").hover(function(){
    $(this).css('font-family', '');
    $(this).css('background-color','');
    }, function() {
    $(this).css('background-color', '');
  });

  $("#equation").hover(function(){
    $(this).css('', '')
  });

  });


  // sound
  function play() {
    var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/click.wav');
    audioElement.play();
    }
  // sound



// code code
})
