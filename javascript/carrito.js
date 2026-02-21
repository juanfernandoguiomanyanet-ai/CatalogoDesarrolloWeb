document.addEventListener("DOMContentLoaded", () => {

    const listaCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");
    const botonFinalizar = document.getElementById("finalizar");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // ── Guardar en localStorage ───────────────────────────────
    function guardar() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    // ── Render ────────────────────────────────────────────────
    function renderCarrito() {
        if (carrito.length === 0) {
            listaCarrito.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`;
            totalElemento.textContent = "$0";
            return;
        }

        listaCarrito.innerHTML = carrito.map(producto => {
            const subtotal = producto.precio * producto.cantidad;
            return `
                <div class="carrito-item" data-id="${producto.id}">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="item-info">
                        <h3>${producto.nombre}</h3>
                        <p class="item-desc">${producto.descripcion}</p>
                        <p class="item-precio">$${producto.precio.toLocaleString()} c/u</p>
                    </div>
                    <div class="item-controles">
                        <button class="btn-menos" onclick="cambiarCantidad(${producto.id}, -1)">−</button>
                        <span class="cantidad">${producto.cantidad}</span>
                        <button class="btn-mas" onclick="cambiarCantidad(${producto.id}, 1)">+</button>
                    </div>
                    <div class="item-subtotal">
                        <p>$${subtotal.toLocaleString()}</p>
                        <button class="btn-eliminar" onclick="eliminarProducto(${producto.id})">✕</button>
                    </div>
                </div>
            `;
        }).join("");

        actualizarTotal();
    }

    // ── Total ─────────────────────────────────────────────────
    function actualizarTotal() {
        const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
        totalElemento.textContent = "$" + total.toLocaleString();
    }

    // ── Cambiar cantidad ──────────────────────────────────────
    window.cambiarCantidad = (id, delta) => {
        const item = carrito.find(p => p.id === id);
        if (!item) return;

        item.cantidad += delta;

        if (item.cantidad <= 0) {
            carrito = carrito.filter(p => p.id !== id);
        }

        guardar();
        renderCarrito();
    };

    // ── Eliminar producto ─────────────────────────────────────
    window.eliminarProducto = (id) => {
        carrito = carrito.filter(p => p.id !== id);
        guardar();
        renderCarrito();
    };

    // ── Finalizar compra ──────────────────────────────────────
    botonFinalizar.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }
        alert("¡Compra finalizada con éxito! Gracias por tu pedido.");
        localStorage.removeItem("carrito");
        carrito = [];
        renderCarrito();
    });

    renderCarrito();
});