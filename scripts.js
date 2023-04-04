let empleados = [];

function Empleado(legajo, nombre, apellido, nacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}


function agregarEmpleado(){
    let legajo = document.getElementById("textLegajo").value;
    let nombre = document.getElementById("textNombre").value;
    let apellido = document.getElementById("textApellido").value;
    let nacimiento = document.getElementById("textNacimiento").value;
    let cargo = document.getElementById("textCargo").value;

    let empleado = new Empleado(legajo, nombre, apellido, nacimiento, cargo);
    empleados.push(empleado);

    alert("Empleado ha sido agregado");

    limpiarCampos();
    
}

function mostrarEmpleados(){
    let listado = '';
     for(empleado of empleados){
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + ": " + empleado[prop] + ","
        }
        listado = listado + "\n";
     }
     alert(listado);
}

function limpiarCampos(){
    document.getElementById("textLegajo").value = "";
    document.getElementById("textNombre").value = "";
    document.getElementById("textApellido").value = "";
    document.getElementById("textNacimiento").value = "";
    document.getElementById("textCargo").value = "";
}