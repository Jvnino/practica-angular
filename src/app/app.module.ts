import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { InformesModule } from './pages/informes/informes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    InformesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
