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
                <div data-id="${producto.id}">
                    <img src="${producto.imagen}" width="120">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio.toLocaleString()}</p>
                    <p>
                        Cantidad:
                        <button class="restar">-</button>
                        <span>${producto.cantidad}</span>
                        <button class="sumar">+</button>
                    </p>
                    <p>Subtotal: $${subtotal.toLocaleString()}</p>
                    <button class="eliminar">Eliminar producto</button>
                    <hr>
                </div>
            `;
        }).join("");

        actualizarTotal();
        agregarEventos();
    }

    function actualizarTotal() {
        const total = carrito.reduce((acc, producto) => {
            return acc + (producto.precio * producto.cantidad);
        }, 0);

        totalElemento.textContent = total.toLocaleString();
    }

    function agregarEventos() {

        document.querySelectorAll(".sumar").forEach(boton => {
            boton.addEventListener("click", (e) => {
                const id = obtenerId(e);
                const producto = carrito.find(p => p.id === id);
                producto.cantidad++;
                guardarYRender();
            });
        });

        document.querySelectorAll(".restar").forEach(boton => {
            boton.addEventListener("click", (e) => {
                const id = obtenerId(e);
                const producto = carrito.find(p => p.id === id);

                if (producto.cantidad > 1) {
                    producto.cantidad--;
                    guardarYRender();
                }
            });
        });

        document.querySelectorAll(".eliminar").forEach(boton => {
            boton.addEventListener("click", (e) => {
                const id = obtenerId(e);
                carrito = carrito.filter(p => p.id !== id);
                guardarYRender();
            });
        });
    }

    function obtenerId(evento) {
        return parseInt(
            evento.target.closest("div").dataset.id
        );
    }

    function guardarYRender() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderCarrito();
    }

    botonFinalizar.addEventListener("click", () => {
        alert("Compra finalizada con éxito.");
        localStorage.removeItem("carrito");
        carrito = [];
        renderCarrito();
    });

    renderCarrito();
});
const btn = document.querySelector('.contacto-btn');
const popup = document.querySelector('.contacto-popup');

btn.addEventListener('click', function (e) {
    e.stopPropagation();
    popup.classList.toggle('activo');
});

document.addEventListener('click', function () {
    popup.classList.remove('activo');
});

popup.addEventListener('click', function (e) {
    e.stopPropagation();
});