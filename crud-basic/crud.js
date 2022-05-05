let arraydata = [];
let contadordatatable = 0;

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
  // console.log(arraydata);

  datatable();
}

function datatable() {
  for (let i = contadordatatable; i < arraydata.length; i++) {
    // console.log(`for contador ${i}`);
    let filaActual = document.getElementById("tblDatos").insertRow(i);

    for (let j = 0; j < 5; j++) {
      var city = filaActual.insertCell(j);
      var edad = filaActual.insertCell(j);
      var email = filaActual.insertCell(j);
      var name = filaActual.insertCell(j);
      var id = filaActual.insertCell(j);
    }

    id.innerHTML = arraydata[i].id;
    name.innerHTML = arraydata[i].name;
    email.innerHTML = arraydata[i].email;
    edad.innerHTML = arraydata[i].edad;
    city.innerHTML = arraydata[i].city;
  }

  contadordatatable++;
}

function eliminar(id) {
  arraydata.splice(id, 1);
}
