import { LoggerService } from "../../servicios/logger.service";
import { Axios, AxiosCache } from "../../servicios/red.service";
import { StorageService } from "../../servicios/storage.service";

const logger = new LoggerService('usuarios');
const storeSerice = new StorageService();
let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



/**
 * Llamada al api para cargar usuarios
 * 
 * @param {*} setUsuario
 * @param {*} navegar
 */
const cargarUsuario = (id, setUsuario) => {
    setUsuario(storeSerice.getItem(`/v1/usuarios?id=${id}`).usuario || {})
    AxiosCache(`/v1/usuarios?id=${id}`)
        .then((resp) => {
            logger.debug('cargarUsuario', resp.data);
            setUsuario(resp.data.usuario);
        })
        .catch((err) => {
            logger.error(err);
        })
}


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
const actualizarUsuario = (event, usuario, form, setCargando) => {
    event.preventDefault();
    setCargando(true);

    for (let key in form) {
        if (form[key]) {
            setCargando(false);
            return;
        }
    }

    Axios.put('/v1/usuarios', usuario)
        .then((resp) => {
            setCargando(false);
            logger.debug('actualizarUsuario', resp.data)
            // TODO: Alerta de éxito
        })
        .catch((err) => {
            logger.error(err)
            setCargando(false);
        });
}


/**
 * Exportaciones
 */
export {
    cargarUsuario,
    fijarCorreo,
    fijarCampo,
    actualizarUsuario
}