import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIConfig } from './ui-library.model';
import { UiLibraryService } from './ui-library.service';

@NgModule({
  imports: [CommonModule],
})
export class UILibModule {
  static forRoot(config: UIConfig): ModuleWithProviders<UILibModule> {
    return {
      ngModule: UILibModule,
      providers: [
        { provide: 'UI_CONFIG', useValue: config },
        UiLibraryService
      ]
    };
  }
}
