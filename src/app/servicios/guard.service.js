import { StorageService } from "./storage.service";


let storageService = new StorageService();



const guard = () => {
    let user = storageService.getItem('user');
    if (!user || !user.nombre) {
        storageService.clear();
        return false;
    }
    return true;
}


export { guard };