var num1 = document.getElementById('n1');
var num2 = document.getElementById('n2');
var selecao = document.querySelector('select');
var resultado = document.getElementById('res');
const operacoes = {
    somar: (n1, n2) => n1 + n2,
    subrair: (n1, n2) => n1 - n2,
    dividir: (n1, n2) => n1 / n2,
    multiplicar: (n1 , n2) => n1 * n2
} 
function calcular(){
    if (selecao.value == 'soma'){
        let res = operacoes.somar(Number(num1.value), Number(num2.value))
        resultado.innerHTML = res; 
    } else if(selecao.value == 'subtracao'){
        let res = operacoes.subrair(Number(num1.value), Number(num2.value))
        resultado.innerHTML = res; 
    } else if(selecao.value == 'divisao') {
        let res = operacoes.dividir(Number(num1.value), Number(num2.value))
        resultado.innerHTML = res;
    } else if(selecao.value == 'multiplicação') {
        let res = operacoes.multiplicar(Number(num1.value), Number(num2.value))
        resultado.innerHTML = res;
    } else if(selecao.value == 'escolhe'){
    	alert('Por favor selecione uma operação');
    }
}