const productos = [
    {
        id: 1,
        nombre: "Resma Papel Bond Carta",
        precio: 18000,
        imagen: "imagenes/img/Papel.png",
        descripcion: "Papel de alta blancura de 75g, ideal para impresiones láser e inyección de tinta."
    },
    {
        id: 2,
        nombre: "Cuaderno Profesional 100 Hojas",
        precio: 9500,
        imagen: "imagenes/img/Cuaderno.png",
        descripcion: "Cuaderno de tapa dura con argollado doble O, disponible en cuadros o líneas."
    },
    {
        id: 3,
        nombre: "Set Marcadores Permanentes",
        precio: 12000,
        imagen: "imagenes/img/Marcadores.png",
        descripcion: "Paquete de marcadores resistentes al agua, aptos para múltiples superficies."
    },

    {
        id: 4,
        nombre: "Carpeta Plástica Oficio",
        precio: 4000,
        imagen: "imagenes/img/Carpetas.png",
        descripcion: "Carpeta con gancho legajador, ideal para organizar y proteger documentos tamaño oficio."
    },
    {
        id: 5,
        nombre: "Lapiceros x10",
        precio: 6500,
        imagen: "imagenes/img/Lapiceros.png",
        descripcion: "Set de bolígrafos de tinta suave en colores básicos (negro, azul y rojo)."
    },
    {
        id: 6,
        nombre: "Resaltadores Pastel x6",
        precio: 11000,
        imagen: "imagenes/img/Resaltadores.png",
        descripcion: "Gama de colores suaves que no traspasan el papel, perfectos para bullet journaling."
    },
    {
        id: 7,
        nombre: "Acuarelas",
        precio: 15000,
        imagen: "imagenes/img/Acuarelas.png",
        descripcion: "Set de pastillas de colores vibrantes y fácil dilución, ideales para iniciación artística."
    },
    {
        id: 8,
        nombre: "Pintura",
        precio: 8000,
        imagen: "imagenes/img/Pintura.png",
        descripcion: "Frasco de pintura acrílica de alta pigmentación, perfecta para cartón, madera y papel."
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


  const btn = document.querySelector('.contacto-btn');
  const popup = document.querySelector('.contacto-popup');

  // Abre/cierra al hacer clic en el botón
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    popup.classList.toggle('activo');
  });

  // Cierra si haces clic en cualquier otro lado
  document.addEventListener('click', function() {
    popup.classList.remove('activo');
  });

  // Evita que clic dentro del popup lo cierre
  popup.addEventListener('click', function(e) {
    e.stopPropagation();
  });
