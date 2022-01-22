
/**
 * Variables de memoria cache
 */
let memory = {};
let memoryGlobal = {};

/**
 * Clase para manejear la memoria cache
 */
export class StorageService {

    /*========================================================================================================================
    *  Manejador del  SessionStorage
    *========================================================================================================================*/

    _setMemory(mKey, data) {
        memory[mKey] = data;
    }

    setItem(mKey, data) {
        this._setMemory(mKey, data);
        window.sessionStorage.setItem(mKey, JSON.stringify(data));
        return data;
    }

    getItem(mKey) {
        if (!memory[mKey]) {
            let data = JSON.parse(window.sessionStorage.getItem(mKey));
            if (!data) {
                data = {};
            }
            this._setMemory(mKey, data);
            return data;
        }
        return memory[mKey];
    }

    removeItem(mKey) {
        delete memory[mKey];
        window.sessionStorage.removeItem(mKey);
    }

    async clear() {
        memory = {};
        window.sessionStorage.clear();
    }


    /*========================================================================================================================
    *  Manejador del  LocalStorage
    *========================================================================================================================*/

    _setMemoryGlobal(mKey, data) {
        memoryGlobal[mKey] = data;
    }

    setItemGlobal(mKey, data) {
        this._setMemoryGlobal(mKey, data);
        window.localStorage.setItem(mKey, JSON.stringify(data));
        return data;
    }

    getItemGlobal(mKey) {
        if (!memoryGlobal[mKey]) {
            let data = JSON.parse(window.localStorage.getItem(mKey));
            if (!data) {
                data = {};
            }
            this._setMemoryGlobal(mKey, data);
            return data;
        }
        return memoryGlobal[mKey];
    }
}