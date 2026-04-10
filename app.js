import usuarios from "./usuarios.js";

    function obtenerActivos(usuarios) {
    return usuarios.filter(u => u.activo);
    }

    console.log(obtenerActivos(usuarios));

        function nombresYCiudades(usuarios) {
    return usuarios.map(u => `${u.nombre} - ${u.domicilio.ciudad}`);
    }

    console.log(nombresYCiudades(usuarios));

        function agruparPorCiudad(usuarios) {
            return usuarios.reduce((acc, u) => {
                const ciudad = u.domicilio.ciudad;

                if (!acc[ciudad]) {
                acc[ciudad] = [];
                }

                acc[ciudad].push(u.nombre);
                return acc;
            }, {});
            }

            console.log(agruparPorCiudad(usuarios));

    function promedioEdadActivos(usuarios) {
    const activos = usuarios.filter(u => u.activo);

    const suma = activos.reduce((acc, u) => acc + u.edad, 0);

    return suma / activos.length;
    }

    console.log(promedioEdadActivos(usuarios));