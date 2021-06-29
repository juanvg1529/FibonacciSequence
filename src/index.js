// import "./styles.css";

function Fibonacci(numberPosition) {
  //Definimos variables
  let number1 = 0;
  let number2 = 1;
  let nextTerm = null;

  console.log("Fibonacci Series:");
  //Formula de la sucesion fibonacci
  nextTerm = number1 + number2;

  //Creamos arreglo
  let fiboArray = [number1, number2, nextTerm];

  //condicional
  while (nextTerm <= numberPosition) {
    number1 = number2;
    number2 = nextTerm;
    nextTerm = number1 + number2;
    //agregamos el nextTerm al arreglo
    fiboArray.push(nextTerm);
  }

  console.log(
    `${fiboArray}. The Fibonacci position sequence is: ${fiboArray.length}.`
  );
}

//instanciamos y le damos un argumento
Fibonacci(8);
