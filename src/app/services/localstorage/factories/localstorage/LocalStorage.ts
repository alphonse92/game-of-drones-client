import { ILocalStorage } from "./localstorage.interface";

export class LocalStorage implements ILocalStorage {
    set(key: string, value: any) {
        return localStorage.setItem(key, value);
    }
    get(key: string) {
        return localStorage.getItem(key);
    }
}