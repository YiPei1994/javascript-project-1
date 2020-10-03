function calculateTip() {
    let billInput = document.getElementById("bill").value;
    let serviseInput = document.getElementById("servise").value;
    let peopleInput = document.getElementById("people").value;

    if (billInput === "" || serviseInput == 0) {
        alert("Please enter values");
        return;
    }

    if (peopleInput === "" || peopleInput <= 1) {
        peopleInput = 1;
        document.getElementById("each").style.display="none";
    } else {
        document.getElementById("each").style.display="block";
    }

    let total = (billInput * serviseInput)/ peopleInput;

    total= Math.round(total * 100) / 100;
    total= total.toFixed(2);

    document.getElementById("cal").style.display="block";
    document.getElementById("tip").innerHTML=total;
};

    document.getElementById("cal").style.display="none";
    document.getElementById("each").style.display="none";

    document.getElementById("calculate").onclick=function() {
        calculateTip();
    }



