import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public text: string = "";

  // Data
  public data_a: any = [];
  public data_b: any = [];
  public data_c: any = [];

  // buttons
  public bt_a: string = "Add";
  public bt_b: string = "Add";
  public bt_c: string = "Add";

  // Exported
  public data_from: any = [];
  public data_final: any = [];

  constructor(private dataService: DataService){

  }

  
  ngOnInit(): void {
  }

  public sendToA(){
    this.text = this.bt_a + ' data to A';
    
    if (this.bt_a === 'Add'){
      this.data_a = this.dataService.getData("A");
      this.bt_a = "Remove";
    }else{
      this.data_a = [];
      this.bt_a = "Add";
    }

  }
  
  public sendToB(){
    this.text = this.bt_b +' data to B';

    if (this.bt_b === 'Add'){
      this.data_b = this.dataService.getData("B");
      this.bt_b = "Remove";
    }else{
      this.data_b = [];
      this.bt_b = "Add";
    }
  }

  public sendToC(){
    this.text = this.bt_c + ' data to C';
    
    if (this.bt_c === 'Add'){
      this.data_c = this.dataService.getData("C");
      this.bt_c = "Remove";
    }else{
      this.data_c = [];
      this.bt_c = "Add";
    }
  }

  public getDataA(e){
    this.data_from = e;
  }

  public getFinal(){
    this.data_final = this.dataService.getData('Final');
  }

  public send_to_ls(){
    localStorage.setItem("data_to", this.data_final);
  }

}
