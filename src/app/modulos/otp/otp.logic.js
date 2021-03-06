import { Axios, AxiosPermisos } from '../../servicios/red.service'
import { StorageService } from '../../servicios/storage.service'
import { LoggerService } from '../../servicios/logger.service'


let regexp = /^[0-9]{6}$/;
let logger = new LoggerService("otp");
let storageService = new StorageService();



/**
 * 
 * @param {*} otp 
 * @param {*} token 
 * @param {*} setCargando 
 */
const ingresar = (otp, token, setCargando, setInvalido, navegar) => {
    let uuid = storageService.getItem('uuid');

    Axios.post('/v1/generar_token', { 'otp': otp, 'captcha': token, 'uuid': uuid })
        .then((resp) => {
            setCargando(false);
            logger.debug('ingresar', resp.data);

            storageService.setItem('user', resp.data);
            if (resp.data.nombre) {
                AxiosPermisos().then((resp) => {
                    if (resp.data?.permisos) {
                        storageService.removeItem('uuid');
                        setTimeout(() => { window.location = '/inicio'; }, 250);
                    }
                });
            }
            setInvalido(true);
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
const generarToken = (event, otp, setInvalido, setCargando, navegar) => {
    event.preventDefault();
    setCargando(true)

    if (regexp.test(String(otp).toLowerCase())) {
        setInvalido(false)

        window.grecaptcha.ready(function () {
            window.grecaptcha.execute(process.env.REACT_APP_API_RECAPTCHA, { action: 'submit' }).then(function (token) {
                ingresar(otp, token, setCargando, setInvalido, navegar);
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
const fijarOtp = (event, hook, setInvalido) => {
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
    fijarOtp
}