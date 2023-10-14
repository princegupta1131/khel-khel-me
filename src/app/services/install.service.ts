import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InstallService {
    deferredPrompt: any;

    constructor() { }

    initInstallPrompt() {
        window.addEventListener('beforeinstallprompt', (event: Event) => {
            // Prevent the default prompt
            event.preventDefault();

            // Store the event for later use
            this.deferredPrompt = event;
        });
    }

    showInstallPrompt() {
        return this.deferredPrompt ? true : false;
    }

    promptUser() {
        if (this.deferredPrompt) {
            return this.deferredPrompt.prompt()
                .then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }

                    // Reset the deferredPrompt variable
                    this.deferredPrompt = null;
                });
        }
    }
}
