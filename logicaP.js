//Exercicio Número 1 
function ordenarNum(){
    let res = document.getElementById("res1");
    let arr = [];
    for (let i = 1; i <= 20; i++) {
      arr.push(i);
    }
    res.innerHTML = "Crescente: " + arr + "<br>";
    res.innerHTML += "Decrescente: " + arr.slice().reverse();
  }

//Exercicio Número 2 

function ordenarNumBs(){
    let res = document.getElementById("res2");
    let arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 20) + 1);
    }
    let qtde = arr.length;
    for (let j = 0; j < qtde - 1; j++) {
      for (let i = 0; i < qtde - j - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let valor = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = valor;
        }
      }
    }
    res.innerHTML = "Array ordenado (BubbleSort): " + arr;
  }

  //Exercicio Número 3
  function somaArr(){
    let res = document.getElementById("res3");
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 220) + 1);
    }
    let soma = arr.reduce((acc, val) => acc + val, 0);
    res.innerHTML = "Números: " + arr + "<br>";
    res.innerHTML += "Soma: " + soma;
  }

  //Exercicio Número 4
function gerarMat() {
    let res = document.getElementById("res4");
    let mat = [];
    for (let i = 0; i < 3; i++) {
      mat[i] = [];
      for (let j = 0; j < 3; j++) {
        mat[i][j] = Math.floor(Math.random() * 20) + 1;
      }
    }

    //Código para fazer um console.table:
    res.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      res.innerHTML += mat[i].join(",| ") + "<br>";
    }
  }

  //Exercicio Número 5

function calcularIMC() {
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
 
    let imc = peso / (altura * altura)

    let situacao = ''
    if (imc < 18.5) situacao = 'Abaixo do peso'
    else if (imc < 25) situacao = 'Peso normal'
    else if (imc < 30) situacao = 'Sobrepeso'
    else situacao = 'Obesidade'


    document.getElementById('res5').innerHTML = `IMC: ${imc.toFixed(2)} (${situacao})`
}

//Exercicio Número 6

function converterTemperatura() {
    let res = document.getElementById("res6");
    let conversao = document.getElementById("conversao").value.trim().toUpperCase();
    let temperatura = Number(document.getElementById("temperatura").value);
  
    if (isNaN(temperatura)) {
      res.innerHTML = "Temperatura inválida!";
      return;
    }
  
    if (conversao === "C") {
      let resultado = (temperatura - 32) * (5 / 9);
      res.innerHTML = temperatura + " °F → " + resultado.toFixed(2) + " °C";
    } else if (conversao === "F") {
      let resultado = (temperatura * 9 / 5) + 32;
      res.innerHTML = temperatura + " °C → " + resultado.toFixed(2) + " °F";
    } else {
      res.innerHTML = "Digite 'C' ou 'F'.";
    }
  }

//Exercicio Número 7

function buscaLinear(){
    let res = document.getElementById("res7");
    let arr = [3, 7, 10, 15, 20, 25, 30];
    let valor = Number(document.getElementById("buscaValor").value);
  
    if (isNaN(valor)) {
      res.innerHTML = "Digite um número válido.";
      return;
    }
  
    let encontrado = arr.indexOf(valor);
    if (encontrado !== -1) {
      res.innerHTML = "Valor " + valor + " encontrado na posição " + encontrado;
    } else {
      res.innerHTML = "Valor não encontrado!";
    }
  }


