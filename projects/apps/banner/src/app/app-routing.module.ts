import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './mainViews/layout/layout.component';
import { ModalComponent } from './mainViews/modal/modal.component';
import { FooterComponent } from './mainViews/footer/footer.component';
import { HeaderComponent } from './mainViews/header/header.component';

const routes: Routes = [
  {
    path: 'app-3',
    component: LayoutComponent,
    children: [
      {
        path: 'page-1',
        component: ModalComponent,
      },
      {
        path: 'page-2',
        component: FooterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
