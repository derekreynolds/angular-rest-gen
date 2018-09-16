import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { <%= entity %> } from 'app/common/model';
import { DeleteDialogComponent } from 'app/common/ui/dialog';


@Component({
  selector: 'er-show-<%= entityKebabCase %>',
  templateUrl: './show-<%= entityKebabCase %>.component.html',
  styleUrls: ['./show-<%= entityKebabCase %>.component.scss']
})
export class Show<%= entity %>Component implements OnInit {

  private restService: RestService<<%= entity %>>;

  <%= entityLowerCase %>: <%= entity %>;

  constructor(private router: Router, private route: ActivatedRoute, private restClientFactoryService: RestClientFactoryService, public dialog: MatDialog) {
    this.restService = restClientFactoryService.get(new <%= entity %>())
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']; 

      this.restService.get(id).subscribe(<%= entityLowerCase %> => {             
        this.<%= entityLowerCase %> = <%= entityLowerCase %>;
      });
    });
  }

  onClickCancel() {
    this.router.navigate(['<%= entityPlural %>']);
  }

  onClickEdit() {
    this.router.navigate(['<%= entityPlural %>/edit', this.<%= entityLowerCase %>.id]);
  }

  onClickDelete() {
  const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result.answer == 'Y') {
        this.restService.delete(this.<%= entityLowerCase %>.id).subscribe(res => {
          this.router.navigate(['<%= entityPlural %>']);
        });        
      }
     
    });

    
  }

}
