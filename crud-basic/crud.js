let arraydata = [];
let contadordatatable = 0;

function senddata() {
  // console.log('funciona');
  let name = document.getElementById("name").value;
  //   console.log(name);
  let email = document.getElementById("email").value;
  let edad = document.getElementById("edad").value;
  let city = document.getElementById("city").value;
  let id = arraydata.length;

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

    id.setAttribute("id", "ide");
    id.innerHTML = arraydata[i].id + 1;
    name.innerHTML = arraydata[i].name;
    email.innerHTML = arraydata[i].email;
    edad.innerHTML = arraydata[i].edad;
    city.innerHTML = arraydata[i].city;

    // let ide = document.getElementById(ide);
    // console.log(arraydata[i].id);
    let ide = arraydata[i].id;

    op.innerHTML = `<button onClick="editar(${ide})">Edit</button>
    <button onClick="eliminar(${ide})">Delete</button>`;
  }

  contadordatatable++;
}

function eliminar(ide) {
  // console.log(ide);
  arraydata.splice(ide, 1);

  document.getElementsByTagName("table")[0].setAttribute("id", "ide");
  document.getElementById("ide").deleteRow(ide + 1);
  // console.log(arraydata);

  resetForm();
}

function editar(ide) {
  console.log("ide editar" + ide);
  let editdata;
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}
