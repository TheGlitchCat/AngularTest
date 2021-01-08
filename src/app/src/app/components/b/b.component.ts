import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  @Input() data: any = [];
  @Output() out_data = new EventEmitter<[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public export_data(){
    this.out_data.emit(this.data.map(item => item*2));
  }
}
