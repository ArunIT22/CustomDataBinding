import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { TemplateRefDemoComponent } from './template-ref-demo/template-ref-demo.component';
import { ProductCompRefComponent } from './product-comp-ref/product-comp-ref.component';
import { CustomerComponent } from './customer/customer.component';
import { StopwatchChildComponent } from './stopwatch-child/stopwatch-child.component';
import { StopwatchParentComponent } from './stopwatch-parent/stopwatch-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SearchComponent,
    TemplateRefDemoComponent,
    ProductCompRefComponent,
    CustomerComponent,
    StopwatchChildComponent,
    StopwatchParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
