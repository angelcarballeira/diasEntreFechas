"use strict"

function recogerDatos() {
	
	// obteniendo fechas de usuario
	let fecha1 = new Date(document.getElementById("fInicial").value);
	let fecha2 = new Date(document.getElementById("fFinal").value);

	// realizando calculos
	const milisegundosDia = 24 * 60 * 60 * 1000;
	let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
	let diasTranscurridos = Math.round(milisegundosTranscurridos / milisegundosDia);

	document.getElementById("mostrar").innerHTML = diasTranscurridos;

}


const boton = document.getElementById("btnDatos");
boton.addEventListener("click",recogerDatos);


