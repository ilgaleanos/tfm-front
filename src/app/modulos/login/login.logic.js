import { Axios } from '../../servicios/red.service'
import { StorageService } from '../../servicios/storage.service'
import { LoggerService } from '../../servicios/logger.service'


let logger = new LoggerService("login");
let regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


/**
 * 
 * @param {*} correo 
 * @param {*} token 
 * @param {*} setCargando 
 */
const ingresar = (correo, token, setCargando, navegar) => {
    Axios.post('/v1/generar_otp', { 'correo': correo, 'captcha': token })
        .then((resp) => {
            logger.debug('ingresar', resp.data);
            let storageService = new StorageService();
            storageService.setItem('uuid', resp.data.uuid);

            navegar('/validar_otp');
        })
        .catch((err) => {
            logger.error('ingresar', err);
            setCargando(false);
        })
}



/**
 * 
 * @param {*} event 
 */
const generarToken = (event, correo, setInvalido, setCargando, navegar) => {
    event.preventDefault();
    setCargando(true)

    if (regexp.test(String(correo).toLowerCase())) {
        setInvalido(false)

        window.grecaptcha.ready(function () {
            window.grecaptcha.execute(process.env.REACT_APP_API_RECAPTCHA, { action: 'submit' }).then(function (token) {
                ingresar(correo, token, setCargando, navegar);
            });
        });
    } else {
        setInvalido(true)
        setCargando(false)
    }
}


/**
 * 
 * @param {*} event 
 * @param {*} hook 
 */
const fijarCorreo = (event, hook, setInvalido) => {
    let valor = event.target.value;
    hook(valor);
    if (regexp.test(String(valor).toLowerCase())) {
        setInvalido(false)
    } else {
        setInvalido(true)
    }
}


/**
 * Exportaciones
 */
export {
    generarToken,
    fijarCorreo
}