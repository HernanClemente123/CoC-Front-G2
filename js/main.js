document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();


    if (validar(this)) {
        this.submit();
    }
});

function limpiarError() {
    var errores = document.getElementsByClassName('error');
    for ( let i=0; i<errores.length; i++){
        errores[i].innerHTML = '';
    }
    
}

limpiarError();

function validar(formulario) {

    if(formulario.nombre.value.length == 0){
        alert('se genero registro incorrectamente')
        document.getElementById('errorName').innerText = "completar campo";
        formulario.nombre.focus();
        return false
        
    }
    else{
        document.getElementById('errorName').innerText = "campo correcto";
    }
    if(formulario.lastName.value.length == 0){
        alert('se genero registro incorrectamente')
        document.getElementById('errorLastName').innerText = "completar campo";
        formulario.lastName.focus();
        return false
        
    }else{
        document.getElementById('errorLastName').innerText = "campo correcto";
    }

    var expReg = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

    if(!expReg.test(formulario.email.value)) {
        document.getElementById('errorEmail').innerText = "ingresar un email valido";
        formulario.email.focus();
        return false;
    }

    if(formulario.password.value.trim().length ==0) {
        document.getElementById('errorPassword').innerText = 'ingresar una contraseña valida';
        formulario.password.focus();
        return false;
    }

    if (formulario.password.value != formulario.confirmarPassword.value){
        document.getElementById('confirmarErrorPassword').innerText = 'las contraseñas no son iguales';
        formulario.confirmarPassword.focus();
    }

    alert('se genero registro correctamente')
    return true;
}