import { AfterViewChecked, Component, DoCheck, OnChanges, OnInit} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewChecked, DoCheck{
  inputContent = "content1";
  inputProp = "input1";

  ngAfterViewChecked() {
    console.log("PARENT: VIEW HAS BEEN CHECKED")
  }

  ngDoCheck() {
    console.log("do check")
  }
}
