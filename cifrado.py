import random
import string

def mostrar_banner():
    banner = r"""
╔════════════════════════════════════════════════════════════════╗                                                ║
║   🏛️  Cifrado César Aleatorio — Vigenère Style                ║
║   🧠  Cada letra, un destino. Cada número, un secreto.         ║
║   Script creado por: GsusH 🕷️🕸️🧙🏻‍♂️.                    ║
╚════════════════════════════════════════════════════════════════╝
"""
    print(banner)

def cifrar_vigenere_aleatorio(mensaje):
    mensaje = mensaje.upper()
    alfabeto = string.ascii_uppercase
    texto_cifrado = ""
    clave_numerica = []

    for letra in mensaje:
        if letra in alfabeto:
            desplazamiento = random.randint(1, 25)
            clave_numerica.append(desplazamiento)
            indice_original = alfabeto.index(letra)
            indice_cifrado = (indice_original + desplazamiento) % 26
            texto_cifrado += alfabeto[indice_cifrado]
        else:
            texto_cifrado += letra
            clave_numerica.append(0)

    return texto_cifrado, clave_numerica

# Ejecución
mostrar_banner()
mensaje = input("Introduce el mensaje a cifrar: ")
cifrado, clave = cifrar_vigenere_aleatorio(mensaje)

print("\n🔐 Texto cifrado:", cifrado)
print("🔑 Clave numérica:", clave)
