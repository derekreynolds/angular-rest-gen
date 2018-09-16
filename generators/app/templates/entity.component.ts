import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { ToolbarSetupService } from 'app/common/util';
import { <%= entity %> } from 'app/common/model';

@Component({
  selector: 'er-<%= entityKebabCase %>',
  templateUrl: './<%= entityKebabCase %>.component.html',
  styleUrls: ['./<%= entityKebabCase %>.component.css']
})
export class <%= entity %>Component implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private restService: RestService<<%= entity %>>;

  dataSource: MatTableDataSource<<%= entity %>>; 

	displayedColumns = ['name'];

	constructor(private router: Router, private toolbarSetupService: ToolbarSetupService, private restClientFactoryService: RestClientFactoryService) { 

	  toolbarSetupService.initialiseToolbar();
		toolbarSetupService.initialiseNavigationTabs();

    this.restService = restClientFactoryService.get(new <%= entity %>);
	}

	ngOnInit() {    
    this.restService.getAll().subscribe(res => { 
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
	}

  onClickAdd() {
    this.router.navigate(['<%= entityPlural %>/add']);
  }

  onClickShow(id: number) {
    this.router.navigate(['<%= entityPlural %>/show', id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
