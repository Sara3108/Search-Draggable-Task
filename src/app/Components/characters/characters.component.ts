import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  res;  //api response
  items: any[]  // results of response
  filteredItems: any[];  // filtered array which will display when typing in textbox
  isLoading:boolean= false;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.getItems();
  }

  // get items from server
  getItems() {
    this.isLoading=true;
    this.service.getAllItems().subscribe(response => {
      this.res = response;
      this.items = this.res.results;
      this.assignCopy();
      console.log(this.items);
      this.isLoading=false;
    })
  }

  // when nothing has typed
  assignCopy() {
    this.filteredItems = Object.assign([], this.items);
  }

  //when typing in textbox
  filterItem(value) {
    if (!value) {
      this.assignCopy();
    }
    this.filteredItems = Object.assign([], this.items).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  
}
