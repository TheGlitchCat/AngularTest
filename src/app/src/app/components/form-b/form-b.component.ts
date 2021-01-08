import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css']
})
export class FormBComponent implements OnInit {

  @Input() data: any = [];
  @Input() text_form_a: any = "";
  @Output() out_data = new EventEmitter<[]>();

  form_b = this.fb.group({
    text: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.form_b.value);
    this.out_data.emit(this.form_b.value.text);
  }

}
