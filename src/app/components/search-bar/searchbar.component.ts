import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public searchString: string;
  constructor() {
    this.searchString = '';
  }

  ngOnInit(): void {
  }

  public search(searchText: string): void {
    this.searchString = searchText;
  }

}
