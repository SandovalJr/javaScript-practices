let arraydata = [];
let contadordatatable = 0;

function senddata() {
  let name = document.getElementById("name").value;
  console.log(name);
  let resultadoname = arraydata.find((info) => info.name == name);
  console.log(resultadoname);

  if (resultadoname == undefined) {
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
  } else {
    console.log("entra a editar");
    let editar_act1 = arraydata.find((data) => data.name == name);
    let ideedit = editar_act1.id;

    editar_actualizar(ideedit);
  }
  console.log(arraydata);
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

    op.innerHTML = `<button onClick="editar_datos(${ide})">Edit</button>
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

function editar_datos(ide) {
  // console.log("ide editar" + ide);
  let editdata = arraydata.find((data) => data.id == ide);
  // console.log(editdata);

  document.getElementById("name").value = editdata.name;
  document.getElementById("email").value = editdata.email;
  document.getElementById("edad").value = editdata.edad;
  document.getElementById("city").value = editdata.city;
}

function editar_actualizar(id_data) {
  // console.log(id_data);
  arraydata[id_data].name = document.getElementById("name").value;
  arraydata[id_data].email = document.getElementById("email").value;
  arraydata[id_data].edad = document.getElementById("edad").value;
  arraydata[id_data].city = document.getElementById("city").value;

  resetForm();
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}
