# WikiKUL

## About

Wikikul GitHub repository was created to document changes in the https://wiki.kul.pl/wiki Wikibase project.


## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Create / Edit entities](#create--edit-entities)
- [Templates:](#templates)
- [Learn more:](#learn-more)
- [See also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

First, you need to have [NodeJS >= v8](https://nodejs.org/), which should come with the npm package manager.

If [wikibase-cli](https://github.com/maxlath/wikibase-cli) isn't already installed and configured:
```sh
npm install --global wikibase-cli

# Set the default Wikibase instance
wb config instance https://wiki.kul.pl

# If you want to use templates to create/edit entities, you need to setup credentials
# Get the credential prompt for the desired target instance
wb config credentials https://wiki.kul.pl

# Test the correctness of the credential configuration
wb config credentials https://wiki.kul.pl test
```

Get a copy of those templates
```sh
git clone https://github.com/ontohgis/wikikul.git
cd wikikul
# Required for templates that `require` dependencies, see the list in package.json
npm install
```

And now let's get started!

## Create / Edit entities

```sh
cd wikikul/create

# Display the help menu of a template
wb create-entity ./prepare-ext-ids.js --help

# Get a preview of the generated edit
wb create-entity ./prepare-ext-ids.js --dry

# Actually make the edit
wb create-entity ./prepare-ext-ids.js

# Actually make the edit
wb create-entity ./create-prefix.js ontohgis: https://onto.kul.pl/ontohgis/
# Display the help menu of a template
wb create-entity ./create-prefix.js --help

# Get a preview of the generated edit
wb create-entity ./create-prefix.js ontohgis: https://onto.kul.pl/ontohgis/ --dry

# Actually make the edit
wb create-entity ./create-prefix.js ontohgis: https://onto.kul.pl/ontohgis/
```


## Templates:
* [templates to create entities](https://github.com/ontohgis/wikikul/tree/master/create)


## Learn more:
* [`wb create-entity`](https://github.com/maxlath/wikibase-cli/blob/master/docs/write_operations.md#wb-create-entity)
* [`wb edit-entity`](https://github.com/maxlath/wikibase-cli/blob/master/docs/write_operations.md#wb-edit-entity), specifically [Generate an edit object from a JS template function](https://github.com/maxlath/wikibase-cli/blob/master/docs/write_operations.md#generate-an-edit-object-from-a-js-template-function)
* [batch mode](https://github.com/maxlath/wikibase-cli/blob/master/docs/write_operations.md#batch-mode)
* [`wb generate-template`](https://github.com/maxlath/wikibase-cli/blob/master/docs/read_operations.md#wd-generate-template)


## See also
* [wikibase-cli-template-collection](https://github.com/maxlath/wikibase-cli-template-collection): wikibase-cli template collection
* [wikidata-scripting](https://github.com/maxlath/wikidata-scripting): examples of scripts to edit Wikidata
* [wikidata-misc](https://github.com/generalist/wikidata-misc): various Wikidata maintenance/upload scripts
