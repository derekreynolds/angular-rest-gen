import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { <%= entity %>  } from 'app/common/model';

@Component({
  selector: 'er-edit-<%= entityKebabCase %>',
  templateUrl: './edit-<%= entityKebabCase %>.component.html',
  styleUrls: ['./edit-<%= entityKebabCase %>.component.css']
})
export class Edit<%= entity %>Component implements OnInit {

  private <%= entityLowerCase %>Form;
 
  private restService: RestService<<%= entity %>>;

  <%= entityLowerCase %>: <%= entity %>;

  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private restClientFactoryService: RestClientFactoryService) {
    this.setUpForm();
    this.restService = restClientFactoryService.get(new <%= entity %>());
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
    let id = params['id']; 

    this.restService.get(id).subscribe(<%= entityLowerCase %> => {   

      this.<%= entityLowerCase %> = <%= entityLowerCase %>;

      this.<%= entityLowerCase %>Form.controls['name'].setValue(this.<%= entityLowerCase %>.name);
      this.<%= entityLowerCase %>Form.controls['name'].valueChanges.subscribe(value => this.<%= entityLowerCase %>.name = value);

    });
  });
  }

  onClickSave() {    
    this.restService.put(this.<%= entityLowerCase %>.id, this.<%= entityLowerCase %>).subscribe(res => {});
    this.router.navigate(['<%= entityPlural %>']);
  }

  onClickCancel() {
    this.router.navigate(['<%= entityPlural %>']);
  }

  private setUpForm() {
    this.<%= entityLowerCase %>Form = this.formBuilder.group ({
      name: [ '', [Validators.required,] ]
    });
  }

}
