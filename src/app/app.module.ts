import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolModule } from './school/school.module';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, AdminComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SchoolModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
