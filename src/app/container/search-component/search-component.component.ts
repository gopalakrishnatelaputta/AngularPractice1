import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {

  searchText:string="";

@Output()
searchTextChanged :EventEmitter<string> =new EventEmitter<string>();
  inputEl: any;

onSearchTextChanged() {
  // this.searchTextChanged.emit(this.searchText);
  }

@ViewChild('searchInput') searchInputEl:ElementRef;

updateSearchText(inputEL :HTMLInputElement){
this.searchText=this.searchInputEl.nativeElement.value;
//searchInputEl inplace ofinputEl
this.searchTextChanged.emit(this.searchText);
}

}
