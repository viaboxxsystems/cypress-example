import {Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Volume} from '../model/volume';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-complete-table',
  templateUrl: './logistics-tracker.component.html',
  styleUrls: ['./logistics-tracker.component.scss']
})
export class LogisticsTrackerComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns = ['state', 'internalId', 'palletId', 'x', 'y', 'z', 'transportationStatus'];

  pallets: Volume[];

  private volumeUrl = '/api/pallet';

  dataSource: any;

  ngOnInit() {

    this.getAllPallets()
      .subscribe(pallet => {
        this.pallets = pallet;

        this.dataSource = new MatTableDataSource(this.pallets);

        this.dataSource.sortingDataAccessor = this.getSortingDataAccessor();

        this.dataSource.sort = this.sort;

        this.dataSource.paginator = this.paginator;
      });
  }

  getAllPallets(): Observable<Volume[]> {
    return this.http.get<Volume[]>(this.volumeUrl);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getSortingDataAccessor() {
    return (item: Volume, property) => {
      switch (property) {
        case 'state':
          return item.status;
        case 'palletId':
          return item.barcode;
        case 'scanTime':
          return item.barcodeScanTime;
        default:
          return item[property];
      }
    };
  }

}
