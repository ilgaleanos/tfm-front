export const LogLevel = {
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4
}

export class LoggerService {

    nombre;
    level = 1;

    constructor(nombre) {
        this.nombre = nombre;
        this.level = LogLevel[process.env.REACT_APP_LOG_LEVEL ? process.env.REACT_APP_LOG_LEVEL : 'ERROR'];
    }


    debug(funcion, ...mensaje) {
        if (this.level <= LogLevel.DEBUG)
            console.debug(this.nombre, '->', funcion, ...mensaje);
    }


    info(funcion, ...mensaje) {
        if (this.level <= LogLevel.INFO)
            console.info(this.nombre, '->', funcion, ...mensaje);
    }


    warn(funcion, ...mensaje) {
        if (this.level <= LogLevel.WARN)
            console.warn(this.nombre, '->', funcion, ...mensaje);
    }


    error(funcion, ...mensaje) {
        if (this.level <= LogLevel.ERROR)
            console.error(this.nombre, '->', funcion, ...mensaje);
    }
}
