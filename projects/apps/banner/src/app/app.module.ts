import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './mainViews/layout/layout.component';
import { ModalComponent } from './mainViews/modal/modal.component';
import { FooterComponent } from './mainViews/footer/footer.component';
import { HeaderComponent } from './mainViews/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ModalComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
