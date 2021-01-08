import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  @Input() data: any = [];
  @Output() out_data = new EventEmitter<[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public export_data(){
    this.out_data.emit(this.data.map(item => item*2));
  }

}
