/**
 * Determinamos el titulo automaticamente de la severidad
 * @param {*} severidad 
 * @returns 
 */
export const generarTitulo = (severidad) => {
    switch (severidad) {
        case 'error':
            return "Error"
        case 'success':
            return "Éxito"
        case 'info':
            return "Informacion"
        case 'warning':
            return "Advertencia"
        default:
            break;
    }
}