
function formulaDepositar(){
    var cantidadT=parseInt(document.getElementById('Depositar').value);
    var cantidadSaldo=parseInt(document.getElementById('S').value);
    document.getElementById('S').value=(cantidadSaldo+cantidadT);
}

function formulaRetirar(){
    var cantidadT=parseInt(document.getElementById('Retirar').value);
    var cantidadSaldo=parseInt(document.getElementById('S').value);
    document.getElementById('S').value=(cantidadSaldo-cantidadT);
}