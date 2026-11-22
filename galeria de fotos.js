function mostrarMenu() {
    const menu = document.getElementById("opcionesMenu");
    menu.classList.toggle("activo");
}
// CAMBIAR DE CATEGORÍA

const botonesCategoria = document.querySelectorAll(".categoria");
const albumes = document.querySelectorAll(".album");

botonesCategoria.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const categoria = boton.dataset.categoria;

        botonesCategoria.forEach(function(elemento) {
            elemento.classList.remove("activa");
        });

        boton.classList.add("activa");

        albumes.forEach(function(album) {

            if (album.dataset.album === categoria) {
                album.classList.add("activo");
            } else {
                album.classList.remove("activo");
            }

        });

    });

});


// BUSCADOR DE FOTOGRAFÍAS

const entradaBusqueda = document.getElementById("buscarFoto");
const botonBuscar = document.getElementById("botonBuscar");
const resultados = document.getElementById("resultadosBusqueda");

function buscarFotografias() {

    const texto = entradaBusqueda.value.trim().toLowerCase();

    resultados.innerHTML = "";

    if (texto === "") {
        resultados.innerHTML =
            "<p>Escribe algo para buscar fotografías.</p>";
        return;
    }

    const fotografias = document.querySelectorAll(".album img");

    let encontrados = 0;

    fotografias.forEach(function(foto) {

        const nombre = foto.dataset.nombre.toLowerCase();
        const descripcion = foto.alt.toLowerCase();

        if (nombre.includes(texto) || descripcion.includes(texto)) {

            const imagen = document.createElement("img");

            imagen.src = foto.src;
            imagen.alt = foto.alt;

            const contenedor = document.createElement("div");

            const titulo = document.createElement("p");
            titulo.textContent = foto.dataset.nombre;

            contenedor.appendChild(imagen);
            contenedor.appendChild(titulo);

            resultados.appendChild(contenedor);

            encontrados++;

        }

    });

    if (encontrados === 0) {
        resultados.innerHTML =
            "<p>No se encontraron fotografías.</p>";
    }

}

botonBuscar.addEventListener("click", buscarFotografias);

entradaBusqueda.addEventListener("keydown", function(evento) {

    if (evento.key === "Enter") {
        buscarFotografias();
    }

});

// Abrir fotografías ampliadas
const visor = document.getElementById("visorImagen");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const cerrarVisor = document.getElementById("cerrarVisor");

document.addEventListener("click", function(evento) {
    if (evento.target.tagName === "IMG" &&
        (evento.target.closest(".album") ||
         evento.target.closest("#resultadosBusqueda"))) {

        imagenAmpliada.src = evento.target.src;
        visor.style.display = "flex";
    }
});

// Cerrar el visor
cerrarVisor.addEventListener("click", function() {
    visor.style.display = "none";
});

// Cerrar al hacer clic fuera de la fotografía
visor.addEventListener("click", function(evento) {
    if (evento.target === visor) {
        visor.style.display = "none";
    }
});