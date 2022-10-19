const Contenedor = require("./contenedor");

const productos = new Contenedor("./productos.json");

productos.save({ title: "prueba3", price: 150 });

/* productos.getById(2);
productos.getAll();
productos.deleteById(4);
productos.deleteAll(); */
