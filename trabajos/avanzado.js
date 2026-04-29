    export function crearGestorTareas() {
    const tareas = new Map();

    function agregarTarea({ id, descripcion, etiquetas = [] }) {
        if (tareas.has(id)) return false;

        tareas.set(id, {
        id,
        descripcion,
        completada: false,
        etiquetas: new Set(etiquetas)
        });

        return true;
    }

    function marcarCompletada(id) {
        if (tareas.has(id)) {
        tareas.get(id).completada = true;
        return true;
        }
        return false;
    }

    function obtenerResumenTareas() {
        let total = tareas.size;
        let completadas = 0;

        for (let t of tareas.values()) {
        if (t.completada) completadas++;
        }

        return {
        total,
        completadas,
        pendientes: total - completadas
        };
    }

    return { agregarTarea, marcarCompletada, obtenerResumenTareas };
    }