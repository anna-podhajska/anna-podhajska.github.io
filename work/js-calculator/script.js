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

  }

  if (equation.length > 35 ) {
    alert("really? hey, shorter equation is actionable");
  }

  $("#equation").html(equation);
})

// code code
})
