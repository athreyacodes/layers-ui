import { Inject, Injectable } from '@angular/core';
import { UIConfig } from './ui-library.model';

@Injectable({
  providedIn: 'root'
})
export class UiLibraryService {
private config: UIConfig = {};

  constructor(@Inject('UI_CONFIG') private userConfig: UIConfig) {
    this.config = { ...this.config, ...userConfig };
    this.applyConfig();
  }

  private applyConfig() {
    if (this.config.primaryColor) {
      document.documentElement.style.setProperty('--primary-color', this.config.primaryColor);
    }
    if (this.config.accentColor) {
      document.documentElement.style.setProperty('--accent-color', this.config.accentColor);
    }
  }
}
