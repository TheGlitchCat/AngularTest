import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  test_form = this.fb.group({
    name: ['']
  });

  public text_a: string = "";
  public text_b: string = "";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.test_form.value);
  }

  get_from_a(e){
    console.log(e);
    this.text_a = e; 
  }

  get_from_b(e){
    console.log(e);
    this.text_b = e;
  }

}
