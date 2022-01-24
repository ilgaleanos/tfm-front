import { LoggerService } from "../../servicios/logger.service"
import { StorageService } from "../../servicios/storage.service"
import { Axios } from "../../servicios/red.service";


const logger = new LoggerService('NuevoUsuario');
const storeService = new StorageService()


let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/**
 * 
 * @param {*} event 
 * @param {*} hook 
 */
const fijarCorreo = (event, usuario, setUsuario, form, setForm) => {
    usuario.correo = event.target.value;
    setUsuario({ ...usuario });
    if (regexp.test(String(usuario.correo).toLowerCase())) {
        form.correo = false
        setForm(form)
    } else {
        form.correo = true
        setForm(form)
    }
}


/**
 * 
 * @param {*} event 
 * @param {*} hook 
 */
const fijarCampo = (event, usuario, setUsuario, form, setForm) => {
    let campo = event.target.id;
    usuario[campo] = event.target.value;
    setUsuario({ ...usuario });

    let longitud = event.target.value.length;
    if (longitud < 2 || 50 < longitud) {
        form[campo] = true
        setForm(form)
    } else {
        form[campo] = false
        setForm(form)
    }
}



/**
 * Actualizamos al usuario
 * 
 * @param {*} usuario 
 * @param {*} form 
 * @param {*} setCargando 
 */
const crearUsuario = (event, usuario, setUsuario, form, setCargando, setSeveridad, setRespuesta) => {
    event.preventDefault();
    setCargando(true);

    for (let key in form) {
        if (form[key] || usuario.correo.length < 2 || usuario.nombre.length < 2 || usuario.correo.length < 2) {
            setCargando(false);
            return;
        }
    }

    Axios.post('/v1/usuarios', usuario)
        .then((resp) => {
            setCargando(false);
            logger.debug('actualizarUsuario', resp.data)

            setUsuario({ nombre: '', apellido: '', correo: '' })


            setSeveridad('success');
            setRespuesta('Usuario creado correctamente');
        })
        .catch((err) => {
            setCargando(false);
            logger.error('actualizarUsuario', err)

            setSeveridad('error');
            setRespuesta('Ha ocurrido un error creando al usuario');
        });
}



/**
 * Permisos del usuario
 * @returns 
 */
const obtenerPermisos = () => {
    return storeService.getPermisos()
}


/**
 * Exportacion
 */
export {
    obtenerPermisos,
    fijarCorreo,
    fijarCampo,
    crearUsuario
}

