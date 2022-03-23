function sueldo(dt, ht){

   var sueldo=dt*ht*(0.13*25);
   return sueldo;
}

document.write('El sueldo de un trabajador es:');
document.write('<br>');
document.write(sueldo(21,8));
