import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  // Exported
  public data_from: any = [];
  public data_final: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.get_from_ls();
  }

  public getFinal(){
    this.data_final = this.dataService.getData('Final');
  }

  public get_from_ls(){
    if (localStorage.hasOwnProperty('data_to')){
      this.data_from = localStorage.getItem('data_to');
    }
  }

}
