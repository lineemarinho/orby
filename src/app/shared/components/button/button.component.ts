import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() btnText: string = "Click Me";
  @Input() type: string = "button";
  @Input() btnClass: string = "";
  @Input() src: string = "";
  @Input() image: boolean = false;
  @Input() disabled: boolean = false;
}
