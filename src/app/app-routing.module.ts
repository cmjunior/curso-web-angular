import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin/admin.guard';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:redirectURL', component: LoginComponent },
  { path: 'cadastro', 
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroModule )
  },
  { path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
    canLoad: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
