    export function obtenerActivos(usuarios) {
    return usuarios.filter(u => u.activo);
    }

    export function nombresYCiudades(usuarios) {
    return usuarios.map(u => `${u.nombre} - ${u.domicilio.ciudad}`);
    }

    export function agruparPorCiudad(usuarios) {
    return usuarios.reduce((acc, u) => {
        const ciudad = u.domicilio.ciudad;

        if (!acc[ciudad]) acc[ciudad] = [];
        acc[ciudad].push(u.nombre);

        return acc;
    }, {});
    }

    export function promedioEdadActivos(usuarios) {
    const activos = usuarios.filter(u => u.activo);
    const suma = activos.reduce((acc, u) => acc + u.edad, 0);
    return suma / activos.length;
    }