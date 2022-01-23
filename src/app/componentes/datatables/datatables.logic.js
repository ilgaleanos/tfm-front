export const configDataTables = {
    page_size: 15,
    length_menu: [15, 40, 70],
    language: {
        length_menu: "Mostrar _MENU_ registros por página",
        filter: "Buscando en registros...",
        info: "Mostrarndo _START_ a _END_ de _TOTAL_ registros",
        pagination: {
            first: "Primero",
            previous: " < ",
            next: " > ",
            last: "Último"
        },
        no_data_text: 'No hay registros',
        loading_text: "Cargando..."
    }
}

/**
 * Agregamos cero para los dias y meses
 * @param {*} numero 
 * @returns 
 */
const paddingCero = (numero) => {
    return numero <= 9 ? '0' + numero : numero;
}

/**
 * Utilidad para formatear la fecha
 * 
 * @param {*} fecha 
 * @returns 
 */
export const formatearDatetime = (fecha) => {
    const date = new Date(fecha);
    return date.getFullYear() + '/' + paddingCero(date.getMonth() + 1) + '/' + paddingCero(date.getDate()) + ' ' + date.getHours() + ':' + date.getMinutes();
}