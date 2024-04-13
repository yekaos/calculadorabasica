const divResultado = document.getElementById('resultado')
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        divResultado.textContent= 'En ambos campos se deben introducir números';
        return;
    }
    const operacion = document.getElementById('operacion').value;

    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                divResultado.textContent= 'No se puede dividir por cero';
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            divResultado.textContent= 'Operación no válida';
            return;
    }

   divResultado.textContent = `
    El resultado de la operación ${operacion} es: ${resultado}
    `;
}