const productos = [
    {
        id: 1,
        nombre: "Resma Papel Bond Carta",
        precio: 18000,
        imagen: "imagenes/img/Papel.png",
        descripcion: "Papel de alta blancura de 75g."
    },
    {
        id: 2,
        nombre: "Cuaderno Profesional 100 Hojas",
        precio: 9500,
        imagen: "imagenes/img/Cuaderno.png",
        descripcion: "Cuaderno de tapa dura con argollado doble O."
    },
    {
        id: 3,
        nombre: "Set Marcadores Permanentes",
        precio: 12000,
        imagen: "imagenes/img/Marcadores.png",
        descripcion: "Marcadores resistentes al agua."
    },
    {
        id: 4,
        nombre: "Carpeta Plástica Oficio",
        precio: 4000,
        imagen: "imagenes/img/Carpetas.png",
        descripcion: "Carpeta con gancho legajador."
    },
    {
        id: 5,
        nombre: "Lapiceros x10",
        precio: 6500,
        imagen: "imagenes/img/Lapiceros.png",
        descripcion: "Set de bolígrafos de tinta suave."
    },
    {
        id: 6,
        nombre: "Resaltadores Pastel x6",
        precio: 11000,
        imagen: "imagenes/img/Resaltadores.png",
        descripcion: "Colores suaves que no traspasan el papel."
    },
    {
        id: 7,
        nombre: "Acuarelas",
        precio: 15000,
        imagen: "imagenes/img/Acuarelas.png",
        descripcion: "Set de pastillas de colores vibrantes."
    },
    {
        id: 8,
        nombre: "Pintura",
        precio: 8000,
        imagen: "imagenes/img/Pintura.png",
        descripcion: "Pintura acrílica de alta pigmentación."
    },
    {
        id: 9,
        nombre: "Colbon",
        precio: 3500,
        imagen: "imagenes/img/pegante.png",
        descripcion: "Colbon liquido de secado rápido."
    },
    {
        id: 10,
        nombre: "Tijeras Escolares",
        precio: 5000,
        imagen: "imagenes/img/tijeras.png",
        descripcion: "Tijeras de punta redonda."
    },
    {
        id: 11,
        nombre: "Cartulina de Colores",
        precio: 2500,
        imagen: "imagenes/img/cartulina.png",
        descripcion: "Cartulinas de colores resistentes y esteticas."
    },
    {
        id: 12,
        nombre: "Corrector en Cint",
        precio: 3000,
        imagen: "imagenes/img/corrector.png",
        descripcion: "Corrector de secado rápido."
    }
];

function renderProductos(lista) {
    const contenedor = document.getElementById("contenedor-productos");

    contenedor.innerHTML = lista.map(producto => `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString()}</p>
            <p>${producto.descripcion}</p>
            <button onclick="agregarAlCarrito(${producto.id})">
                AGREGAR AL CARRITO
            </button>
        </div>
    `).join("");
}
function renderDescuentos() {

    const contenedor = document.getElementById("contenedor-descuentos");

    const productosConDescuento = productos.slice(0, 4);

    contenedor.innerHTML = productosConDescuento.map(producto => `

        <div class="card-producto-descuento">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString()}</p>
            <p>${producto.descripcion}</p>
            <button onclick="agregarAlCarrito(${producto.id})">
                AGREGAR AL CARRITO
            </button>
        </div>

    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {

    renderProductos(productos);
    renderDescuentos();

    const inputBusqueda = document.querySelector(".buscador input");

    inputBusqueda.addEventListener("input", (e) => {
        const texto = e.target.value.toLowerCase();

        const productosFiltrados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(texto)
        );

        renderProductos(productosFiltrados);
    });

});

function agregarAlCarrito(id) {

    const producto = productos.find(p => p.id === id);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`${producto.nombre} añadido al carrito exitosamente`);
}
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