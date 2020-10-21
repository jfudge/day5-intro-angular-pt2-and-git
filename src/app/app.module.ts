import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";

// All components that you want to use in the app must be declared in a module
@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
