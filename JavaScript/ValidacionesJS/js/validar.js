function validar(){
  var nombre = document.frmDetalle.txtNombre.value;
  if(document.frmDetalle.txtNombre.value.length==0){
    alert("Tiene que ingresar un nombre");
    document.frmDetalle.txtNombre.focus();
}else{
    document.frmDetalle.rNombre.value=nombre;
}


}