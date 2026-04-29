    import express from "express";
    import usuarios from "./usuarios.js";

    import {
    obtenerActivos,
    nombresYCiudades,
    agruparPorCiudad,
    promedioEdadActivos,
    } from "./trabajos/manejo-usuarios.js"; 

    import {
    Circulo,
    mayorQue,
    filtrarPares,
    Estudiante,
    contarOcurrencias,
    filtrarPorEdad,
    calcularTotal,
    agruparPersonasPorCiudad
    } from "./trabajos/funciones-basicas.js";
    
    import { crearGestorTareas } from "./trabajos/avanzado.js";

    const app = express();
    const PORT = 3000;

    //GESTOR DE TAREAS
    const gestor = crearGestorTareas();

    //USUARIOS

    app.get("/usuarios/activos", (req, res) => {
    res.json(obtenerActivos(usuarios));
    });

    app.get("/usuarios/nombres-ciudades", (req, res) => {
    res.json(nombresYCiudades(usuarios));
    });

    app.get("/usuarios/por-ciudad", (req, res) => {
    res.json(agruparPorCiudad(usuarios));
    });

    app.get("/usuarios/promedio-edad", (req, res) => {
    res.json({ promedio: promedioEdadActivos(usuarios) });
    });

    //TAREAS

    app.get("/tareas/agregar", (req, res) => {
    gestor.agregarTarea({
        id: 1,
        descripcion: "Estudiar JS",
        etiquetas: ["js"]
    });

    res.json({ ok: true });
    });

    app.get("/tareas/completar/:id", (req, res) => {
    gestor.marcarCompletada(Number(req.params.id));
    res.json({ ok: true });
    });

    app.get("/tareas/resumen", (req, res) => {
    res.json(gestor.obtenerResumenTareas());
    });

    //FUNCIONES BÁSICAS
    // 1. círculo
    app.get("/basico/circulo/:radio", (req, res) => {
    const c = new Circulo(Number(req.params.radio));

    res.json({
        area: c.area(),
        perimetro: c.perimetro()
    });
    });

    // 2. mayorQue
    app.get("/basico/mayor/:a/:b", (req, res) => {
    res.json({ resultado: mayorQue(Number(req.params.a), Number(req.params.b)) });
    });

    // 3. pares
    app.get("/basico/pares", (req, res) => {
    res.json(filtrarPares([1, 2, 3, 4, 5, 6]));
    });

    // 4. estudiante
    app.get("/basico/estudiante", (req, res) => {
    const e = new Estudiante("Ana", [90, 80, 100, 70]);
    res.json({ promedio: e.promedio() });
    });

    // 5. ocurrencias
    app.get("/basico/ocurrencias", (req, res) => {
    res.json({ total: contarOcurrencias([1, 2, 1, 1, 3], 1) });
    });

    // 6. filtrar edad
    app.get("/basico/mayores", (req, res) => {
    const personas = [
        { nombre: "Juan", edad: 16 },
        { nombre: "Ana", edad: 22 },
        { nombre: "Carlos", edad: 18 }
    ];

    res.json(filtrarPorEdad(personas));
    });

    // 7. carrito
    app.get("/basico/carrito", (req, res) => {
    const carrito = [
        { nombre: "Laptop", precio: 1000, cantidad: 2 },
        { nombre: "Mouse", precio: 50, cantidad: 3 }
    ];

    res.json({ total: calcularTotal(carrito) });
    });

    // 8. agrupar ciudad
    app.get("/basico/ciudades", (req, res) => {
    const personas = [
        { nombre: "Juan", ciudad: "Madrid" },
        { nombre: "Ana", ciudad: "Barcelona" },
        { nombre: "Carlos", ciudad: "Madrid" }
    ];

    res.json(agruparPersonasPorCiudad(personas));
    });
    //SERVIDOR
    app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:${3000}`);
    });