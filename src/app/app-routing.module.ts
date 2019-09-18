import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WpCardComponent } from './core/wp-card/wp-card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: WpCardComponent },
  { path: 'WpCard', component: WpCardComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'WpCard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
