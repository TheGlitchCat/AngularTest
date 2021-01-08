import { Injectable } from '@angular/core';
import data from '../../data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getData(value: string){
    return data[value];
  }

  public saveData(value: any){
    data['Final'] = value;
  }

}
