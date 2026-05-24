# 🔒 Validador de Códigos de Acceso (Números Primos)

Este es un proyecto interactivo desarrollado para el desafío de la materia de PROGRAMACION WEB. Consiste en un sistema de simulación de seguridad para el control de acceso a una bóveda bancaria digital, donde la validez de los códigos depende de la robustez criptográfica de los números primos.

## 👤 Información del Estudiante
* **Nombre:** Edilson Beimar Suca Roman
* **Semestre:** Primer Semestre - 2026
* **Proyecto:** Sistema de Control de Acceso Criptográfico

## 🚀 Características del Proyecto
* **Validación en tiempo real:** Comprueba si un código de mínimo 8 dígitos es primo utilizando un algoritmo optimizado basado en la raíz cuadrada (`Math.sqrt(n)`). Se usa la raiz cuadrada ya que si usamos el numero de 8 digitos el tiempo de respuesta de la pagina seria mas lento
* **Sugerencias inteligentes:** Si el código ingresado es inseguro (no primo), el sistema busca y despliega dinámicamente en una tabla los 3 números primos seguros más cercanos.
* **Diseño Responsivo:** Interfaz limpia adaptada para dispositivos móviles y computadoras mediante CSS nativo y variables en `:root`.

## Uso del Ingles
Se hizo uso del idioma ingles ya que en la carrera de informatica se hace mucho uso de este idioma a nivel mundial, entonces a modo de practica se lo uso en id´s y variables

## 🛠️ Tecnologías Utilizadas
* HTML5 (Estructura semántica)
* CSS3 (Diseño responsivo y variables globales en `:root`)
* JavaScript (Lógica matemática, ciclos `while`/`for` y manipulación del DOM con `document.getElementById`)
