import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WpCardComponent } from './core/wp-card/wp-card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'WpCard', component: WpCardComponent },
  { path: '', component: WpCardComponent },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'WpCard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
