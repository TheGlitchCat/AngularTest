import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent implements OnInit {

  @Input() data: any = [];
  @Input() text_form_b: any = "";
  @Output() out_data = new EventEmitter<[]>();

  form_a = this.fb.group({
    text: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.form_a.value);
    this.out_data.emit(this.form_a.value.text);
  }

}
