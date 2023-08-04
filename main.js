function ingresar(event){
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if(username.value === "brandon" && password === "123"){
        window.location.href = "cajero.html";
        //Inhabilitar boton de inicio de sesion
    }
    else{
        mensaje.style.color = "red";
        mensaje.innerHTML = "Error al iniciar sesion";
    }
}