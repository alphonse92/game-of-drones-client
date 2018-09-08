import { LocalStorage } from "./LocalStorage";
import { ILocalStorage } from "./localstorage.interface";
//your custom local storage
//import { LocalStorageImpl } from "./LocalStorage";

export class LocalStorageFactory {
    public static TYPE_DEFAULT: string = "LocalStorage";
    constructor() {
        throw ("LocalStorageFactory doenst implement a constructor")
    }
    public static get(type: string): ILocalStorage {
        if (type === LocalStorageFactory.TYPE_DEFAULT)
            return new LocalStorage();
        return null;
    }
}