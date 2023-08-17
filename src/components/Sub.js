

function Sub(props) {
    return (
        <div>
        <p>
          {getResult(props.first, props.second, props.operator)}
        </p>
        </div>
    );
  }
  
  function getResult(first, second, operator){
    var result = "Please choose operator from drop-down list";
    var string = first + " " + operator + " " + second + " = ";
    if (operator == "+")
      result = string + (Number(first) + Number(second));
    else if (operator == "-")
      result = string + (first - second);
    else if (operator == "*")
      result = string + (first * second);
    else if (operator == "/")
      result = string + (first / second);

    return result;
  }
  export default Sub;
  