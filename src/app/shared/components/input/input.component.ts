import { Component, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  hide = true;
  @Input() disabled: boolean = false;
  @Input() type: string = "text";
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() title: string = "";
  @Input() placeholder: string = "";
  @Input() btnClass: string = "";
  toggleHide(): void {
    this.hide = !this.hide;
  }
}
