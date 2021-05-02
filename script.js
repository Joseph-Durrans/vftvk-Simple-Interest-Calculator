document.addEventListener("DOMContentLoaded", (event) => {
    var rateSlider = document.getElementById("rateSlider");
    var rateVal = document.getElementById("rateVal");

    var outputElement = document.getElementById("output");

    var amountOutput = document.getElementById("amountOutput");
    var interestOutput = document.getElementById("interestOutput");
    var calculatedAmountOutput = document.getElementById(
        "calculatedAmountOutput"
    );
    var calculatedYearOutput = document.getElementById("calculatedYearOutput");

    rateVal.innerHTML = rateSlider.value;

    rateSlider.oninput = function () {
        rateVal.innerHTML = this.value;
    };

    var form = document.getElementById("interestCalculatorForm");

    console.log(form);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let amountNumber = parseFloat(
            document.getElementById("amountNumber").value
        );
        let rateSliderValue = parseFloat(rateSlider.value) / 100;
        let yearsNumber = parseFloat(
            document.getElementById("yearsNumber").value
        );

        if (!amountNumber > 0 || amountNumber < 0 || amountNumber == null) {
            alert("Invalid principal. Please enter a positive number.");
            document.getElementById("amountNumber").focus();
        } else {
            let compInterest = simpleInterest(
                amountNumber,
                yearsNumber,
                rateSliderValue
            );

            outputElement.style.display = "block";

            console.log();

            amountOutput.innerHTML = amountNumber;
            interestOutput.innerHTML = rateSlider.value;
            console.log(compInterest - amountNumber);
            calculatedAmountOutput.innerHTML =
                Math.ceil((compInterest - amountNumber) * 100) / 100;
            calculatedYearOutput.innerHTML =
                new Date().getFullYear() + yearsNumber;
        }
    });
});

const compoundInterest = (p, t, r, n) => {
    return p * Math.pow(1 + r / n, n * t);
};

const simpleInterest = (p, t, r) => {
    return p * (1 + r * t);
};
