alert("Ingrese los numeros sin puntos ni comas")
const txtop3 = document.getElementById("op3")
const txtoperando = document.getElementById("operando")
const txtop4 = document.getElementById("op4")
const txtcalcu = document.getElementById("calcular")
const textresul = document.getElementById("resultado")


txtcalcu.addEventListener('click', calcular)


function calcular(){

    const operando = txtoperando.value
    const op3 = parseFloat(txtop3.value)
    const op4 = parseFloat(txtop4.value)
   
    if ((operando == "+"|| operando == "-" || operando == "*" || operando == "/") && !isNaN (op3) && !isNaN (op4)){
        let resultado;
        switch(operando){
            case "+":
                resultado = op3 + op4 
                break;
            case "-":
                resultado = op3 - op4
                break;
            case "*":
                resultado = op3 * op4
                break;
            case "/":
                resultado = op3 / op4
                break;
                    
        }
        textresul.style = "color:green"
        textresul.innerText="= $ " + resultado
    }else {
        textresul.style = "color:red"
        textresul.innerText="Calculo Imposible"
    }


}