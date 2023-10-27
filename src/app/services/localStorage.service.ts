// local-storage.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorageChanges = new Subject<string>();

  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.key === 'yourLocalStorageKey') {
        this.localStorageChanges.next(event.newValue);
      }
    });
  }

  getLocalStorageChanges() {
    return this.localStorageChanges.asObservable();
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
    this.localStorageChanges.next(value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key:string){
    return localStorage.removeItem(key)
  }
  private storageKey = 'selectedTabIndex';

  getTabIndex(): number | null {
    const storedValue = localStorage.getItem(this.storageKey);
    return storedValue !== null ? +storedValue : null;
  }

  setTabIndex(index: number): void {
    localStorage.setItem(this.storageKey, index.toString());
  }
}
