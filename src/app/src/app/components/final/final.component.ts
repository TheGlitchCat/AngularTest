import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  @Input() data: any = [];
  @Output() trigger = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  public remove_data(){
    this.data = [];
  }

  public save_data(){
    this.dataService.saveData(this.data);
    this.trigger.emit();
  }

}
