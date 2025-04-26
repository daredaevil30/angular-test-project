import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UploadComponent } from './pages/upload/upload.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'upload', component: UploadComponent}
];
