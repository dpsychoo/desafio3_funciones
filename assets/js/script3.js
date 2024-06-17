/*Tip: El siguiente script te ayudará a realizar acciones en función
de que se presione una tecla, además en la guía de estudio encontrarás
un ejemplo. 

document.addEventListener('keydown', function (event) {
if (event.key === 'a') {
    //Cambiar a color 1
} else if (event.key === 's') {
    //Cambiar a color 2
    }
}) 

3.3 Crea una página junto a un script que guarde
dentro de una variable global un color dependiendo de la letra
del teclado presionada.

- La letra a guardará el color rosado.
- La letra s guardará el color naranjo.
- La letra d guardará el color celeste.
- Para guardar el color revisa el tip al final del enunciado.
- Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
color blanco y borde negro.
- Al presionar las teclas a, s o d, se deberá cambiar el color del div
“key” a rosado, naranjo o celeste respectivamente. */

let colorGlobal;

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        colorGlobal = 'pink';
    } else if (event.key === "s") {
        colorGlobal = 'orange';
    } else if (event.key === "d") {
        colorGlobal = 'skyblue';
    }

    if (colorGlobal) {
        document.getElementById("key").style.backgroundColor = colorGlobal;
    }
});


/* 3.4 Siguiendo con la lógica del punto anterior, al presionar
las teclas q, w o e se deberá crear un div nuevo de las mismas
dimensiones antes mencionadas con los colores
morado, gris y café respectivamente */


document.addEventListener('keydown', function (event) {
    const otroDiv = document.getElementById("key");

    if (event.key === "q") {
        createNewDiv('purple');
    } else if (event.key === "w") {
        createNewDiv('gray');
    } else if (event.key === "e") {
        createNewDiv('brown');
    }

    if (colorGlobal) {
        otroDiv.style.backgroundColor = colorGlobal;
    }
});

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.className = "nuevoDiv";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}

