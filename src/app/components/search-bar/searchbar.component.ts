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

  public search(searchText: string): void {
    this.searchString = searchText;
    this.searchQuery.emit(this.searchString);
  }

}
