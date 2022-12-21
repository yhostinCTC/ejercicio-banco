/*
Crearemos un cajero automático. Este programa debe permitir las siguiente acciones:
1. Ingresar a tu cuenta solo si escribes la contraseña correcta asociada a tu DNI.
2. Mostrar un menú que permita elegir entre las opciones:
    - Consultar saldo.
    - Retirar dinero.
    - Agregar dinero a tu cuenta.
    - Cambiar la contraseña.
3. Es importante que se valide que el monto a retirar sea igual o menor al saldo de la cuenta y que se pida confirmación para realizar la transacción.
4. Una vez realizada una acción del menú, se debe preguntar si se quiere realizar una nueva acción o finalizar la transacción.
*/

let data = [
    ['72386702', "1234", 300],
    ['72386701', 'sho21', 500]
]

function validarCredenciales(){
    let dni = prompt("Ingrese su DNI:")
    let existeDNI = false;
    let posicionData = -1
    for (let i = 0; i<data.length; i++){
        if(data[i][0] == dni){
            existeDNI = true;
            posicionData = i;
            console.log("Encontre el dni")

            break;
        }
    }

    if (existeDNI == false){
        alert("DNI no encontrado intente de nuevo.")
        return false
    }

    // validacion de la contraseña
    let passwordCorrecto = false;
    let password = '';
    let intentos = 3;
    while(!passwordCorrecto && intentos>0){
        password = prompt("Ingrese su password: ");
        if(data[posicionData][1] == password){
            passwordCorrecto = true;
            console.log('Password correcta')
            return posicionData;
        }
        intentos--;
    }
    alert('Te has quedado sin intentos')
    return false;
}

function consultarSaldo(posicionData){
    alert(`Saldo Disponible: ${data[posicionData][2]}`)
}

function retirarSaldo(posicionData){
    let montoRetirar = parseInt(prompt("Monto a retirar: "));
    if(montoRetirar <= data[posicionData][2]){
        data[posicionData][2] -= montoRetirar;
        alert('Monto retirado satisfactoriamente')
    }
    else{
        alert('Monto supera el saldo disponible')
    }

}




//  llamada a funciones
consultarSaldo(1);
validarCredenciales()