import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { NgxSortableComponent } from 'ngx-sortable';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private service: DataService) { }

  res;  //api response
  results: any[]  // results of response
  items: any[];  // filtered array which will display when typing in textbox
  isLoading: boolean = false;  //for spinner


  

  ngOnInit() {
    this.getItems();
  }

  // get items from server
  getItems() {
    this.isLoading = true;
    this.service.getAllItems().subscribe(response => {
      this.res = response;
      this.results = this.res.results;
      this.assignCopy();
      console.log(this.results);
      this.isLoading = false;
    })
  }

  // when nothing has typed
  assignCopy() {
    this.items = Object.assign([], this.results);
  }

  //when typing in textbox
  filterItem(value) {
    if (!value) {
      this.assignCopy();
    }
    this.items = Object.assign([], this.results).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  //Sortable list style
  listStyle = {
    width: '100%',
    height: '100%',
    dropZoneHeight:'100px',
  }

  

}
