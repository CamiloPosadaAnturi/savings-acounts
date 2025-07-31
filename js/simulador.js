document.addEventListener("DOMContentLoaded", function () {
    const cuentAhorro = document.querySelector("form")

    cuentAhorro.addEventListener("submit", function (evento) {
        evento.preventDefault();
    

        const presentValue = parseFloat(document.getElementById("presentValue").value);
        const interesRate = parseFloat(document.getElementById("interesRate").value);
        const time = parseInt(document.getElementById("time").value);

        if (isNaN(presentValue) || isNaN(interesRate) || isNaN(time) || time <= 0 ) {
            alert("Ingrese los valores Válidos en los campos");
            return;
        }

    
    
    let futureValue;

    if (interesRate > 0) {
        const decimalRate = interesRate / 100;
        
        futureValue = (presentValue * Math.pow(1 + decimalRate, time))
    }

    futureValue = futureValue.toFixed(2);

        let result = document.getElementById("result");

        if (!result) {
            result = document.createElement("div");
            result.id = "result";
            document.body.appendChild(result);
        }

        result.textContent = `Tu Valor Futuro Será: $${futureValue}`;

})
})