import { LoggedInGuard } from './loggedin.guard';
import { HistoricoComponent } from './historico/historico.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes =[
    {path:'', component:HomeComponent, canActivate: [LoggedInGuard]},
    {path:'login', component:LoginComponent},
    {path:'historico', component: HistoricoComponent, canActivate: [LoggedInGuard]}
]