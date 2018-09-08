import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ILocalStorage } from './factories/localstorage/localstorage.interface';
import { LocalStorageFactory } from './factories/localstorage/Storages';



@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private storage: ILocalStorage;
  private static instance: LocalstorageService;
  private constructor() {
    this.storage = LocalStorageFactory.get(LocalStorageFactory.TYPE_DEFAULT);
  }

  public set(key: string, value: any) {
    if (value) {
      this.storage.set(key, JSON.stringify(value))
      return true;
    }
    return false;
  }

  public get(key: string) {
    let data = this.storage.get(key);
    return data ? JSON.parse(data) : null;
  }

  public static getInstance() {
    if (!LocalstorageService.instance) {
      console.log("creating instance local storage")
      LocalstorageService.instance = new LocalstorageService();
    }
    return LocalstorageService.instance;
  }

}


