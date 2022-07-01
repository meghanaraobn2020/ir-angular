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

  public relevantDocuments = [];
  public docList = [];
  constructor(public daoService: DaoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(DialogComponent);
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

  public getCheckedRelevantDocuments(docId: any): void {
    this.docList.push(docId);

    if (this.docList.length > 4) {
      this.getNewRelevantDocuments(this.docList).then(value => this.relevantDocuments = value);
    }
  }

  public getNewRelevantDocuments(userRelevantDocumentList: string[]): Promise<any> {
    return new Promise<any>(resolve => {
      this.daoService.getNewRelevantDocuments(userRelevantDocumentList).toPromise().then(async value => {
        this.relevantDocuments = value;
        resolve(value);
      }).catch(reason => {
        console.error(reason);
      });
    });
  }
}
