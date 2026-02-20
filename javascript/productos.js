const productos = [
    {
        id: 1,
        nombre: "Resma Papel Bond Carta",
        precio: 18000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Papel de alta blancura de 75g, ideal para impresiones láser e inyección de tinta."
    },
    {
        id: 2,
        nombre: "Cuaderno Profesional 100 Hojas",
        precio: 9500,
        imagen: "imagenes/img/producto.png",
        descripcion: "Cuaderno de tapa dura con argollado doble O, disponible en cuadros o líneas."
    },
    {
        id: 3,
        nombre: "Set Marcadores Permanentes",
        precio: 12000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Paquete de marcadores resistentes al agua, aptos para múltiples superficies."
    },
    {
        id: 4,
        nombre: "Colores x24",
        precio: 15000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Caja de colores con minas suaves y resistentes, perfectos para dibujo artístico y escolar."
    },
    {
        id: 5,
        nombre: "Carpeta Plástica Oficio",
        precio: 4000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Carpeta con gancho legajador, ideal para organizar y proteger documentos tamaño oficio."
    },
    {
        id: 6,
        nombre: "Lapiceros x10",
        precio: 6500,
        imagen: "imagenes/img/producto.png",
        descripcion: "Set de bolígrafos de tinta suave en colores básicos (negro, azul y rojo)."
    },
    {
        id: 7,
        nombre: "Resaltadores Pastel x6",
        precio: 11000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Gama de colores suaves que no traspasan el papel, perfectos para bullet journaling."
    },
    {
        id: 8,
        nombre: "Cartulina Escolar x10",
        precio: 8000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Pliegos de cartulina de diversos colores para manualidades y carteleras."
    },
    {
        id: 9,
        nombre: "Pegante en Barra",
        precio: 3500,
        imagen: "imagenes/img/producto.png",
        descripcion: "Adhesivo de secado rápido, libre de solventes y lavable; no arruga el papel."
    },
    {
        id: 10,
        nombre: "Tijeras Escolares",
        precio: 5000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Tijeras de punta roma con mango ergonómico para mayor seguridad y comodidad."
    },
    {
        id: 11,
        nombre: "Regla 30cm",
        precio: 2500,
        imagen: "imagenes/img/producto.png",
        descripcion: "Regla plástica transparente y flexible con medidas en centímetros y pulgadas."
    },
    {
        id: 12,
        nombre: "Corrector Líquido",
        precio: 3000,
        imagen: "imagenes/img/producto.png",
        descripcion: "Lápiz corrector de alta cobertura con punta de precisión para errores pequeños."
    }
];


function renderProductos(lista) {
    const contenedor = document.getElementById("contenedor-productos");

    contenedor.innerHTML = lista.map(producto => `
        <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString()}</p>
            <button data-id="${producto.id}">
                AGREGAR AL CARRITO
            </button>
        </div>
    `).join("");
}


document.addEventListener("DOMContentLoaded", () => {
    renderProductos(productos);
});