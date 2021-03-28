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
import { NgSelectedExampleComponent } from './ng-selected-example/ng-selected-example.component';
import { NgxSelectModule } from 'ngx-select-ex';
@NgModule({
  declarations: [
    AppComponent,
    DemoDirective,
    TreeViewComponent,
    DynamicFormComponent,
    PaggingExampleComponent,
    NgSelectedExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
