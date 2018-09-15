var Generator = require('yeoman-generator');

String.prototype.toUpperCaseFirstChar = function() {
    return this.substr( 0, 1 ).toUpperCase() + this.substr( 1 );
}

String.prototype.toLowerCaseFirstChar = function() {
    return this.substr( 0, 1 ).toLowerCase() + this.substr( 1 );
}

String.prototype.toKebabCase = function() {
    return this.replace(/\s+/g, '-').toLowerCase();
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
	      this.entityKebabCase = answers.entity.toKebabCase();
	      this.path = answers.path;

	      this.log(`Generating Angular 2+ REST CRUD consumer for ${answers.entity} in ${answers.path}`);
	    });
  	}

  	writing() {
  		var packagePath = 'src/app/' + this.path;
	    this.fs.copyTpl(
	      	this.templatePath('index.ts'),
	      	this.destinationPath(`${packagePath}/index.ts`),
	      	{ entity: `${this.entity}` }
	    );
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.ts'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}` }
	    );
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.spec.ts'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.spec.ts`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}` }
	    );
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.html'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.html`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}` }
	    );
	    this.fs.copyTpl(
	      	this.templatePath('entity.component.scss'),
	      	this.destinationPath(`${packagePath}/${this.entityKebabCase}.component.scss`),
	      	{ entity: `${this.entity}`, entityKebabCase: `${this.entityKebabCase}` }
	    );
  	}
};

