function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var Calculate;
  
  
    if (op == "add"){
      Calculate = a + b;
    } else if (op == "min"){
      Calculate = a - b;
    } else if (op == "div"){
      Calculate = a / b;
    }else if (op == "mul"){
      Calculate = a * b;
    }
  
    document.querySelector("#result").innerHTML = Calculate;
  }