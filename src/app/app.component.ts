import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Angular Demo";
  leadParagraph: string =
    "Hello World! All changes will be reflected in the browser immediately!";

  // Property Data Binding works on methods as well
  order() {
    alert("You have ordered something!");
  }
}
