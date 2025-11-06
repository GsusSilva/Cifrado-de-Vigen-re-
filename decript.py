import string

def mostrar_banner():
    banner = r"""
╔════════════════════════════════════════════════════════════════╗   ║
║                                                                ║
║   🏛️  Descifrado César Aleatorio — Vigenère Style             ║
║   🧠  La clave revela lo oculto. El César sonríe.              ║
║   Script creado por: GsusH 🕷️🕸️🧙🏻‍♂️                   ║
╚════════════════════════════════════════════════════════════════╝
"""
    print(banner)

def descifrar_vigenere_aleatorio(texto_cifrado, clave_numerica):
    texto_cifrado = texto_cifrado.upper()
    alfabeto = string.ascii_uppercase
    texto_descifrado = ""

    for i, letra in enumerate(texto_cifrado):
        if letra in alfabeto:
            desplazamiento = clave_numerica[i]
            indice_cifrado = alfabeto.index(letra)
            indice_original = (indice_cifrado - desplazamiento) % 26
            texto_descifrado += alfabeto[indice_original]
        else:
            texto_descifrado += letra

    return texto_descifrado

# Ejecución
mostrar_banner()
mensaje_cifrado = input("Introduce el mensaje cifrado: ")
clave_str = input("Introduce la clave numérica separada por comas (ej. 3,12,5,...): ")
clave_numerica = [int(x.strip()) for x in clave_str.split(",")]

mensaje_original = descifrar_vigenere_aleatorio(mensaje_cifrado, clave_numerica)
print("\n📜 Mensaje original:", mensaje_original)
