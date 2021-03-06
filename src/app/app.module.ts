import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HerokuTestComponent } from './heroku-test/heroku-test.component';

@NgModule({
  declarations: [AppComponent, HerokuTestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HerokuTestComponent],
})
export class AppModule {}
