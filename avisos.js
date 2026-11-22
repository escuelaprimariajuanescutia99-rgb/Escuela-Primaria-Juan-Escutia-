function buscarAvisos() {

    const busqueda = document
        .getElementById("buscarAviso")
        .value.toLowerCase();

    const tarjetas = document.querySelectorAll(".tarjeta-aviso");

    let encontrados = 0;

    tarjetas.forEach(tarjeta => {

        const contenido = tarjeta.textContent.toLowerCase();

        if (contenido.includes(busqueda)) {
            tarjeta.style.display = "block";

            if (busqueda !== "") {
                encontrados++;
            }

        } else {
            tarjeta.style.display = "none";
        }

    });

    const resultado = document.getElementById("resultadoBusqueda");

    if (busqueda === "") {
        resultado.innerHTML =
            "<h3>Resultado de búsqueda</h3><p>Escribe una palabra para encontrar un aviso.</p>";
    } else {
        resultado.innerHTML =
            "<h3>Resultado de búsqueda</h3><p>Se encontraron " + encontrados + " avisos.</p>";
    }
}

function mostrarMas(boton) {

    const tarjeta = boton.closest(".tarjeta-aviso");

    tarjeta.classList.toggle("abierto");

    if (tarjeta.classList.contains("abierto")) {
        boton.textContent = "Ver menos";
    } else {
        boton.textContent = "Ver más";
    }

}