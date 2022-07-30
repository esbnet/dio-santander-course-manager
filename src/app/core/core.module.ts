import { NgModule } from '@angular/core';
import { AppNavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { Error404Component } from './components/Error/Error404.component';

@NgModule({
  declarations: [AppNavbarComponent, Error404Component],
  imports: [
    RouterModule.forChild([{ path: '**', component: Error404Component }]),
  ],
  exports: [AppNavbarComponent],
})
export class CoreModule {}
