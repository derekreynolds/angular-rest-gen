import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { RestClientFactoryService, RestService } from 'app/common/rest';
import { <%= entity %> } from 'app/common/model';


@Component({
  selector: 'er-add-<%= entityKebabCase %>',
  templateUrl: './add-<%= entityKebabCase %>.component.html',
  styleUrls: ['./add-<%= entityKebabCase %>.component.scss']
})
export class Add<%= entity %>Component implements OnInit {

  private <%= entityLowerCase %>Form;

  private restService: RestService<<%= entity %>>;

  public <%= entityLowerCase %> = new <%= entity %>();

  constructor(private router: Router, private formBuilder: FormBuilder, private restClientFactoryService: RestClientFactoryService) { 
  	this.restService = restClientFactoryService.get(new <%= entity %>);
  }

  ngOnInit() {
  	this.<%= entityLowerCase %>Form = this.formBuilder.group ({
      name: [ this.<%= entityLowerCase %>.name, [Validators.required] ],
  	});
  }

  onClickSave() {
    this.<%= entityLowerCase %>.name = this.<%= entityLowerCase %>Form.controls['name'].value;
  	this.restService.post(this.<%= entityLowerCase %>).subscribe(res => {});
  	this.router.navigate(['<%= entityPlural %>']);
  }

  onClickCancel() {
  	this.router.navigate(['<%= entityPlural %>']);
  }

}