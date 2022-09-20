
let dia = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
let fechas = new Date();
let fecha = document.getElementById("fecha");
fecha.innerHTML =
  "Fecha :" +
  fechas.getDate() +
  " Mes: " +
  (fechas.getMonth() + 1) +
  " "  +
  "Dia: " +
  dia[fechas.getDay()] +" "+
  "Hora: " +
  fechas.getHours() +
  ":" +
  fechas.getMinutes() +
  " "+
  "Seconds:" +
  " " +
  "<strong>" +
  fechas.getSeconds() +
  "<strong>";
