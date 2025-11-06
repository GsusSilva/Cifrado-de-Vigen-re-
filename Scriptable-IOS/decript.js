// ===========================================
// DESCIFRADO VIGENÈRE ALEATORIO DESDE ATAJOS  
// Creado por GsusH 🕷️🕸️🧙🏻‍♂️
// ===========================================

// Entrada esperada: texto cifrado + clave numérica separados por "||"
// Ejemplo: "ZCWS QXJHR || 18,14,11,18,0,5,10,3,7,17"

let entrada = args.shortcutParameter;
let mensajeSalida = "";

if (!entrada || !entrada.includes("||")) {
  mensajeSalida = "❌ Entrada inválida. Usa el formato: texto || clave";
  Script.complete();
  return mensajeSalida;
}

// Separar texto cifrado y clave
let [textoCifrado, claveStr] = entrada.split("||").map(x => x.trim());

if (!textoCifrado || !claveStr) {
  mensajeSalida = "❌ Faltan datos. Asegúrate de incluir texto y clave separados por '||'.";
  Script.complete();
  return mensajeSalida;
}

let claveNumerica = claveStr.split(",").map(x => parseInt(x.trim()));
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let textoDescifrado = "";

textoCifrado = textoCifrado.toUpperCase();

for (let i = 0; i < textoCifrado.length; i++) {
  let letra = textoCifrado[i];
  let desplazamiento = claveNumerica[i] || 0;

  if (alfabeto.includes(letra)) {
    let indice = alfabeto.indexOf(letra);
    let original = alfabeto[(indice - desplazamiento + 26) % 26];
    textoDescifrado += original;
  } else {
    textoDescifrado += letra;
  }
}

mensajeSalida = `
📜 Mensaje original:
${textoDescifrado}
`;

Script.complete();
return mensajeSalida;
