let arraydata = [];

function senddata() {
  // console.log('funciona');
  let name = document.getElementById("name").value;
  //   console.log(name);
  let email = document.getElementById("email").value;
  let edad = document.getElementById("edad").value;
  let city = document.getElementById("city").value;
  let id = arraydata.length + 1;

  let jsondata = {
    id,
    name,
    email,
    edad,
    city,
  };

  arraydata.push(jsondata);
//   console.log(arraydata);
}
