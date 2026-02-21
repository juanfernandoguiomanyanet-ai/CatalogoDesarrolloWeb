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
        nombre: "Pegante en Barra",
        precio: 3500,
        imagen: "imagenes/img/Pegante.png",
        descripcion: "Pegante sólido de secado rápido."
    },
    {
        id: 10,
        nombre: "Tijeras Escolares",
        precio: 5000,
        imagen: "imagenes/img/Tijeras.png",
        descripcion: "Tijeras de punta redonda."
    },
    {
        id: 11,
        nombre: "Regla 30cm Transparente",
        precio: 2500,
        imagen: "imagenes/img/Regla.png",
        descripcion: "Regla plástica resistente."
    },
    {
        id: 12,
        nombre: "Corrector Líquido",
        precio: 3000,
        imagen: "imagenes/img/Corrector.png",
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

document.addEventListener("DOMContentLoaded", () => {
    renderProductos(productos);

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