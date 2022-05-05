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
      var id = filaActual.insertCell(0);
      var name = filaActual.insertCell(1);
      var email = filaActual.insertCell(2);
      var edad = filaActual.insertCell(3);
      var city = filaActual.insertCell(4);
      var op = filaActual.insertCell(5);
    }

    id.innerHTML = arraydata[i].id;
    name.innerHTML = arraydata[i].name;
    email.innerHTML = arraydata[i].email;
    edad.innerHTML = arraydata[i].edad;
    city.innerHTML = arraydata[i].city;
    op.innerHTML = `<button onClick="editar(this)">Edit</button>
    <button onClick="eliminar(this)">Delete</button>`;
  }

  contadordatatable++;
}

function eliminar(id) {
  console.log('eliminar');
}

function editar(id) {
  console.log('editar');
}
