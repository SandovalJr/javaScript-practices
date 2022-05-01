function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzbuzz();
// Let permite declarar variables limitando su alcance (osea en ucierto bloque)

function prueba() {
  var  i = "contratado";

  for (var  i = 0; i < 2; i++) {
    //
    //
    //
  }

  console.log(i);
}


prueba();
