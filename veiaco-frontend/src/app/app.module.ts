import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './common/home/home.component';
import { DebtsComponent } from './pages/debts/debts.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuNavComponent } from './common/menu-nav/menu-nav.component';
import { RepositoryBaseService } from './repository/base/repository-base.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    DebtsComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpModule
  ],
  providers: [RepositoryBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
