import { Routes } from '@angular/router';
import { UiComponentsComponent } from './core/ui-components/ui-components.component';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'components', component: UiComponentsComponent },
    { path: '**', component: HomeComponent }
];
