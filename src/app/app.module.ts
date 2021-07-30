import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ButtonComponent } from './button/button.component';
import { HtmlEventComponent } from './html-event/html-event.component';
import { NgDirectiveComponent } from './ng-directive/ng-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TwoWayBindingComponent,
    ButtonComponent,
    HtmlEventComponent,
    NgDirectiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
