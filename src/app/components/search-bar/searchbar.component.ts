import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() searchQuery = new EventEmitter();
  public searchString: string;
  constructor() {
    this.searchString = '';
  }

  ngOnInit(): void {
  }

  public updateSearch(searchText: string): void {
    this.searchString = searchText;
  }

  public search(): void {
    this.searchQuery.emit(this.searchString);
  }

}
