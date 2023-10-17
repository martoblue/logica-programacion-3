function numFactorial(valNum) {

  valNum = parseFloat(valNum);
  let resultado = 0
  function factorial(n) {
    console.log("dentro factorial")
    let total = 1;

    for (let i = 1; i <= n; i++) {
      total = total * i;
      i < n ? resultado = resultado + i + " x " : resultado = resultado + i
    }
    if (isNaN(valNum)) {
      return 'Ingrese un número!';
    } else {
      return resultado = `${valNum}! = ${resultado} = ${total}`;
    }
  }
  document.getElementById("resultado").innerHTML = factorial(valNum);
}