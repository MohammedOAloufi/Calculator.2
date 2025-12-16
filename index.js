const display =  document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function clearToDisplay(){
    display.value = "";
}

function calculate(){
    if (display.value === "") {
        display.value = "0";
    }
    display.value = eval(display.value);    
}

