import { Component, OnInit } from '@angular/core';
import {DaoService} from '../../services/dao.service';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public docNames = [];
  public relevantDocuments = [];
  constructor(public daoService: DaoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(DialogComponent);
    this.getDocumentName().then(value => this.docNames = value);
  }

  public getDocumentName(): Promise<any> {
    return new Promise<any>(resolve => {
      this.daoService.getDocName().toPromise().then(async value => {
        this.docNames = value;
        resolve(value);
      }).catch(reason => {
        console.error(reason);
      });
    });
  }

    public getRelevantDocuments(searchQuery: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.daoService.getRelevantDocuments(searchQuery).toPromise().then(async value => {
        this.relevantDocuments = value;
        resolve(value);
      }).catch(reason => {
        console.error(reason);
      });
    });
  }
}
