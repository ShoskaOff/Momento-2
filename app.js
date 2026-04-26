// Base de datos simulada (8 productos mínimo)
const productos = [
    {
        id: 1,
        nombre: "Auriculares Gamer",
        precio: 150000,
        categoria: "Tecnología",
        imagenUrl: "https://www.logitechstore.com.co/cdn/shop/files/G325_BLK_SOPORTE_DIADEMA.jpg?v=1773668105&width=600"
    },
    {
        id: 2,
        nombre: "Camiseta Oversize",
        precio: 45000,
        categoria: "Ropa",
        imagenUrl: "https://static.bershka.net/assets/public/a228/f62f/a3044713b128/0f3eeaedc4e5/01966071707-a4o/01966071707-a4o.jpg?ts=1776353209158&w=850"
    },
    {
        id: 3,
        nombre: "Laptop Lenovo",
        precio: 2800000,
        categoria: "Tecnología",
        imagenUrl: "https://p3-ofp.static.pub//fes/cms/2025/09/25/b128l0aps0l6vf2punaj102u7q5oqx247916.png?width=584&height=584"
    },
    {
        id: 4,
        nombre: "Aspiradora Hogar",
        precio: 300000,
        categoria: "Hogar",
        imagenUrl: "https://carulla.vtexassets.com/arquivos/ids/24544091/Aspiradora-3en1-WD1-Classic-KARCHER-WD1-Classic-3274469_a.jpg?v=639068683987630000"
    },
    {
        id: 5,
        nombre: "Pantalón Cargo",
        precio: 90000,
        categoria: "Ropa",
        imagenUrl: "https://static.bershka.net/assets/public/7bd0/51cc/3bb64891934f/ed0ad126ea54/01954168809-a4o/01954168809-a4o.jpg?ts=1773843996749&w=850"
    },
    {
        id: 6,
        nombre: "Smartwatch",
        precio: 220000,
        categoria: "Tecnología",
        imagenUrl: "https://mac-center.com/cdn/shop/files/IMG-18072531_m_jpeg_1.jpg?v=1757526344&width=823"
    },
    {
        id: 7,
        nombre: "Silla Ergonómica",
        precio: 480000,
        categoria: "Hogar",
        imagenUrl: "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/cosm_chairs/th_prd_ovw_cosm_chairs_hv.jpg.rendition.480.480.jpg"
    },
    {
        id: 8,
        nombre: "Chaqueta Rompevientos",
        precio: 130000,
        categoria: "Ropa",
        imagenUrl: "https://static.bershka.net/assets/public/9795/8510/18294c9bbf95/9bb53489a38e/01090718800-a4o/01090718800-a4o.jpg?ts=1765900694442&w=850"
    }
];


// Función para renderizar los productos en pantalla
const contenedorProductos = document.getElementById("contenedorProductos");

const renderizarProductos = (listaProductos) => {
    contenedorProductos.innerHTML = "";

    listaProductos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="card">
                <img src="${producto.imagenUrl}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <p><strong>Categoría:</strong> ${producto.categoria}</p>
            </div>
        `;
    });
};

// Renderizado inicial
renderizarProductos(productos);


// Filtros y búsqueda
const inputBusqueda = document.getElementById("inputBusqueda");
const selectCategoria = document.getElementById("selectCategoria");
const btnBuscar = document.getElementById("btnBuscar");

// Evento al hacer clic en buscar
btnBuscar.addEventListener("click", () => {
    const texto = inputBusqueda.value.toLowerCase();
    const categoria = selectCategoria.value;

    const filtrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(texto) &&
        (categoria === "" || producto.categoria === categoria)
    );

    renderizarProductos(filtrados);
});

// Evento al cambiar la categoría
selectCategoria.addEventListener("change", () => {
    const categoria = selectCategoria.value;

    const filtrados = categoria === "" 
        ? productos 
        : productos.filter(producto => producto.categoria === categoria);

    renderizarProductos(filtrados);
});