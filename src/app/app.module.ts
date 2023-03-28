import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { TemplateRefDemoComponent } from './template-ref-demo/template-ref-demo.component';
import { ProductCompRefComponent } from './product-comp-ref/product-comp-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SearchComponent,
    TemplateRefDemoComponent,
    ProductCompRefComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
