let fivePer = document.getElementById("five");
let tenPer = document.getElementById("ten");
let fifPer = document.getElementById("fifteen");
let twentyPer = document.getElementById("twentyfive");
let fiftyPer = document.getElementById("fifty");
let customTip = document.getElementById("custom");
let billAmt = document.getElementById("bill");
let numPeople = document.getElementById("people");
let tipAmt = document.getElementById("tipamt");
let tipPerP = document.getElementById("tipperp");
let resetB = document.getElementById("reset");
let custIn = document.getElementById("custominput");

function fivePercent() {
    tipAmt.innerHTML = "$"+(billAmt.value * 0.05).toFixed(2);
    if(numPeople.value > 0) {
        tipPerP.innerHTML = "$"+ ((billAmt.value * 0.05) / numPeople.value).toFixed(2);
    } else {
        tipPerP.innerHTML = "$0.00";
    }
};

function tenPercent() {
    tipAmt.innerHTML = "$"+(billAmt.value * 0.1).toFixed(2);
    if(numPeople.value > 0) {
        tipPerP.innerHTML = "$"+ ((billAmt.value * 0.1) / numPeople.value).toFixed(2);
    } else {
        tipPerP.innerHTML = "$0.00";
    }
};

function fifteenPercent() {
    tipAmt.innerHTML = "$"+(billAmt.value * 0.15).toFixed(2);
    if(numPeople.value > 0) {
        tipPerP.innerHTML = "$"+ ((billAmt.value * 0.15) / numPeople.value).toFixed(2);
    } else {
        tipPerP.innerHTML = "$0.00";
    }
};

function twentyPercent() {
    tipAmt.innerHTML = "$"+(billAmt.value * .20).toFixed(2);
    if(numPeople.value > 0) {
        tipPerP.innerHTML = "$"+ ((billAmt.value * 0.20) / numPeople.value).toFixed(2);
    } else {
        tipPerP.innerHTML = "$0.00";
    }
};

function fiftyPercent() {
    tipAmt.innerHTML = "$"+(billAmt.value * .50).toFixed(2);
    if(numPeople.value > 0) {
        tipPerP.innerHTML = "$"+ ((billAmt.value * 0.50) / numPeople.value).toFixed(2);
    } else {
        tipPerP.innerHTML = "$0.00";
    }
};

function custom() {
    customTip.style.display = "none";
    custIn.style.display = "unset";
};

function reset() {
    tipAmt.innerHTML = "$0.00";
    tipPerP.innerHTML = "$0.00";
    numPeople.value = "";
    billAmt.value = "";
    customTip.style.display = "unset";
    custIn.style.display = "none";
};

function customEval() {
    tipAmt.innerHTML = "$"+(billAmt.value * (custIn.value / 100)).toFixed(2);
    if(numPeople.value > 0) {
        tipPerP.innerHTML = "$"+ ((billAmt.value * (custIn.value / 100)) / numPeople.value).toFixed(2);
    } else {
        tipPerP.innerHTML = "$0.00";
    }
}


fivePer.addEventListener('click', fivePercent);
tenPer.addEventListener('click', tenPercent);
fifPer.addEventListener('click', fifteenPercent);
twentyPer.addEventListener('click', twentyPercent);
fiftyPer.addEventListener('click', fiftyPercent);
resetB.addEventListener('click', reset);
customTip.addEventListener('click', custom);
custIn.addEventListener('input', customEval);
