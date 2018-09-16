var Generator = require('yeoman-generator');
var pluralize = require('pluralize')

String.prototype.toUpperCaseFirstChar = function() {
    return this.substr( 0, 1 ).toUpperCase() + this.substr( 1 );
}

String.prototype.toLowerCaseFirstChar = function() {
    return this.substr( 0, 1 ).toLowerCase() + this.substr( 1 );
}

String.prototype.toKebabCase = function() {
    return this.replace(/\s+/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

module.exports = class extends Generator {

	prompting() {
	    return this.prompt([{
		  type    : 'input',
		  name    : 'username',
		  message : 'What\'s your username?',
		  store   : true
		},
	    {
	      type    : 'input',
	      name    : 'path',
	      message : 'Enter path to create the files for e.g. /client',
	      default : '/',
	      store   : true
	    }, {
	      type    : 'input',
	      name    : 'entity',
	      message : 'Enter the name of the entity to create the REST service for?'
	    }]).then((answers) => {
	      this.username = answers.username;
	      this.entity = answers.entity.toUpperCaseFirstChar();
	      this.entityLowerCase = answers.entity.toLowerCaseFirstChar();
	      this.entityKebabCase = answers.entity.toKebabCase();
	      this.entityPlural = pluralize(this.entityKebabCase);
	      this.path = answers.path + this.entityKebabCase;

	      this.log(`Generating Angular 2+ REST CRUD consumer for ${answers.entity} in ${answers.path}`);
	    });
  	}

  	writing() {
  		var basePath = 'src/app/';
  		var modelPath = basePath + 'common/model';
  		var packagePath = basePath + this.path;
  		// Model
  		this.fs.copyTpl(
	      	this.templatePath('common/model/entity.ts'),
	      	this.destinationPath(`${modelPath}/${this.entityKebabCase}.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}` }
	    );
  		// Index
	    this.fs.copyTpl(
	      	this.templatePath('index.ts'),
	      	this.destinationPath(`${packagePath}/index.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}` }
	    );
	    //List
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.ts'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}` }
	    );
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.spec.ts'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.spec.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}` }
	    );
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.html'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.html`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}` }
	    );
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.scss'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.scss`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}` }
	    );
	    // Add
	    this.fs.copyTpl(
	      	this.templatePath('add/add-entity.component.ts'),
	      	this.destinationPath(`${packagePath}/add/add-${this.entityKebabCase}.component.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('add/add-entity.component.spec.ts'),
	      	this.destinationPath(`${packagePath}/add/add-${this.entityKebabCase}.component.spec.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('add/add-entity.component.html'),
	      	this.destinationPath(`${packagePath}/add/add-${this.entityKebabCase}.component.html`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('add/add-entity.component.scss'),
	      	this.destinationPath(`${packagePath}/add/add-${this.entityKebabCase}.component.scss`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	    // Edit
	    this.fs.copyTpl(
	      	this.templatePath('edit/edit-entity.component.ts'),
	      	this.destinationPath(`${packagePath}/edit/edit-${this.entityKebabCase}.component.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('edit/edit-entity.component.spec.ts'),
	      	this.destinationPath(`${packagePath}/edit/edit-${this.entityKebabCase}.component.spec.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('edit/edit-entity.component.html'),
	      	this.destinationPath(`${packagePath}/edit/edit-${this.entityKebabCase}.component.html`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('edit/edit-entity.component.scss'),
	      	this.destinationPath(`${packagePath}/edit/edit-${this.entityKebabCase}.component.scss`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	    // Show
	    this.fs.copyTpl(
	      	this.templatePath('show/show-entity.component.ts'),
	      	this.destinationPath(`${packagePath}/show/show-${this.entityKebabCase}.component.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('show/show-entity.component.spec.ts'),
	      	this.destinationPath(`${packagePath}/show/show-${this.entityKebabCase}.component.spec.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('show/show-entity.component.html'),
	      	this.destinationPath(`${packagePath}/show/show-${this.entityKebabCase}.component.html`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
	   	this.fs.copyTpl(
	      	this.templatePath('show/show-entity.component.scss'),
	      	this.destinationPath(`${packagePath}/show/show-${this.entityKebabCase}.component.scss`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}`, entityPlural: `${this.entityPlural}`, entityLowerCase: `${this.entityLowerCase}` }
	    );
  	}
};

