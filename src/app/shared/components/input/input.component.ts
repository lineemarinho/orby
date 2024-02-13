import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  value: any = "";
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @Input() disabled: boolean = false;
  @Input() type: string = "text";
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() title: string = "";
  @Input() placeholder: string = "";
  @Input() btnClass: string = "";

  hide = true;
  toggleHide(): void {
    this.hide = !this.hide;
  }
}
