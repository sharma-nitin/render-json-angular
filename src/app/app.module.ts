import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JsonRendererComponent } from './json-renderer/json-renderer.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JsonRendererComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
