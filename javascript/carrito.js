document.addEventListener("DOMContentLoaded", () => {

    const listaCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");
    const botonFinalizar = document.getElementById("finalizar");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    function renderCarrito() {

        if (carrito.length === 0) {
            listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
            totalElemento.textContent = "0";
            return;
        }

        listaCarrito.innerHTML = carrito.map(producto => {

            const subtotal = producto.precio * producto.cantidad;

            return `
                <div>
                    <img src="${producto.imagen}" width="120">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio.toLocaleString()}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Subtotal: $${subtotal.toLocaleString()}</p>
                    <hr>
                </div>
            `;
        }).join("");

        actualizarTotal();
    }

    function actualizarTotal() {
        const total = carrito.reduce((acumulador, producto) => {
            return acumulador + (producto.precio * producto.cantidad);
        }, 0);

        totalElemento.textContent = total.toLocaleString();
    }

    botonFinalizar.addEventListener("click", () => {
        alert("Compra finalizada con éxito.");
        localStorage.removeItem("carrito");
        carrito = [];
        renderCarrito();
    });

    renderCarrito();
});