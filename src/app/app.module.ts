import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDirective } from './demo.directive';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { PaggingExampleComponent } from './pagging-example/pagging-example.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoDirective,
    TreeViewComponent,
    DynamicFormComponent,
    PaggingExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
