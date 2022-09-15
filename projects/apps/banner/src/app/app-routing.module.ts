import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './mainViews/layout/layout.component';
import { FooterComponent } from './mainViews/footer/footer.component';
import { HeaderComponent } from './mainViews/header/header.component';

const routes: Routes = [
  {
    path: 'app-3',
    component: LayoutComponent,
    children: [
      {
        path: 'page-1',
        component: HeaderComponent,
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
