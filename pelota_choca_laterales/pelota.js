window.onload = function() {

	document.getElementById('pelota').style.position = "relative";
	document.getElementById('pelota').style.top = "0px";
	document.getElementById('pelota').style.left = "0px";

	// carga de los gifs en memoria
	gifDch = new Image();
	gifDch.src = "peloDch1.gif";
	gifIzq = new Image();
	gifIzq.src = "peloIzq1.gif";

	// mostrar esta pelota al inicio
	pelota = document.getElementById('pelota');
	pelota.src = gifIzq.src;
	sentidoGiro = document.getElementById('mensaje');
	sentidoGiro.innerHTML = 'Giro en sentido: antihorario';

	// caracteristicas graficas
	variacionX = 5;
	variacionY = 5;
	ancho = 550;
	alto = 385;
	radioPelota = 75;

	// posicion de salida aleatoria
	posX = Math.floor(Math.random() * (ancho - radioPelota));
	posY = Math.floor(Math.random() * (alto - radioPelota));

	movimientoX = 1; // 1 hacia derecha, -1 hacia izquierda
	movimientoY = -1; // 1 hacia arriba, -1 hacia abajo
	giro = -1; // 1 sentido horario, -1 antihorario

	setInterval(moverPelota, 50);
};

function moverPelota() {

	posX = posX + variacionX;
	posY = posY + variacionY;

	pelota.style.left = posX + "px";
	pelota.style.top = posY + "px";

	// borde vertical derecha
	if (posX >= ancho - radioPelota) {
		variacionX = -variacionX;

		// cambio direccion
		movimientoX = -1;

		if (movimientoY == -1 && giro == 1) {
			pelota.src = gifIzq.src;
			giro = -1;
			sentidoGiros(giro);
		}
		if (movimientoY == 1 && giro == -1) {
			pelota.src = gifDch.src;
			giro = 1;
			sentidoGiros(giro);
		}
	}

	// borde vertical izquierda
	if (posX <= 0) {
		variacionX = -variacionX;

		// cambio direccion
		movimientoX = 1;

		if (movimientoY == -1 && giro == -1) {
			pelota.src = gifDch.src;
			giro = 1;
			sentidoGiros(giro);
		}
		if (movimientoY == 1 && giro == 1) {
			pelota.src = gifIzq.src;
			giro = -1;
			sentidoGiros(giro);
		}
	}

	// borde inferior
	if (posY >= alto - radioPelota) {
		variacionY = -variacionY;

		// cambio direccion
		movimientoY = 1;

		if (movimientoX == -1 && giro == 1) {
			pelota.src = gifIzq.src;
			giro = -1;
			sentidoGiros(giro);
		}
		if (movimientoX == 1 && giro == -1) {
			pelota.src = gifDch.src;
			giro = 1;
			sentidoGiros(giro);
		}
	}

	// borde superior
	if (posY <= 0) {
		variacionY = -variacionY;

		// cambio direccion
		movimientoY = -1;

		if (movimientoX == -1 && giro == -1) {
			pelota.src = gifDch.src;
			giro = 1;
			sentidoGiros(giro);
		}
		if (movimientoX == 1 && giro == 1) {
			pelota.src = gifIzq.src;
			giro = -1;
			sentidoGiros(giro);
		}
	}

	// cambio mensaje de giro en pantalla
	function sentidoGiros(giro) {
		if (giro == -1) {
			sentidoGiro.innerHTML = 'Giro en sentido: antihorario';
		} else {
			sentidoGiro.innerHTML = 'Giro en sentido: horario';
		}
	}
}
