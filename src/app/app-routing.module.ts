import { PostarComponent } from './pages/vaga/postar/postar.component';
import { AuthGuard } from './services/guards/auth.guard';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagaPage } from './pages/vaga/vaga.page';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'vagas',
    component: VagaPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'vagas/postar',
    component: PostarComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
