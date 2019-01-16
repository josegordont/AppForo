import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoComponent } from './foro/foro.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'foro', component: ForoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
