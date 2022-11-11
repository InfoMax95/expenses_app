import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina1Component } from './components/pages/pagina1/pagina1.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent },
  {path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'pagina1', pathMatch: 'full'},
    {path: 'pagina1', component: Pagina1Component},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '404',
    component: NotFoundComponent
  },
  // questo va sempre inserito come ultima path altrimenti rischiamo che prenda sempre questo
  {
    path: '**', // questo indica qualsiasi indirizzo diverso dai nostri
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
