// ===========================================
// CIFRADO VIGENÈRE ALEATORIO DESDE ATAJOS// 
// GsusH 🕷️🕸️🧙🏻‍♂️
// ===========================================

let mensajeEntrada = args.shortcutParameter;
let mensajeSalida = "";
let textoCifrado = "";
let claveNumerica = [];
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// ===========================================
// VERIFICACIÓN DE ENTRADA
// ===========================================
let textoLimpio = String(mensajeEntrada || "").trim();

if (!textoLimpio) {
  mensajeSalida = "❌ No se recibió ningún texto para cifrar.";
  Script.complete();
  return mensajeSalida;
}

// ===========================================
// CIFRADO LETRA A LETRA CON DESPLAZAMIENTO ALEATORIO
// ===========================================
let mensaje = textoLimpio.toUpperCase();

for (let letra of mensaje) {
  if (alfabeto.includes(letra)) {
    let desplazamiento = Math.floor(Math.random() * 25) + 1;
    claveNumerica.push(desplazamiento);
    let indice = alfabeto.indexOf(letra);
    let cifrado = alfabeto[(indice + desplazamiento) % 26];
    textoCifrado += cifrado;
  } else {
    textoCifrado += letra;
    claveNumerica.push(0);
  }
}

// ===========================================
// SALIDA FINAL EN FORMATO: TEXTO || CLAVE
// ===========================================
mensajeSalida = `${textoCifrado} || ${claveNumerica.join(",")}`;

Script.complete();
return mensajeSalida;
