# WikiKUL

## About

Wikikul GitHub repository was created to document changes in the https://wiki.kul.pl/wiki Wikibase project.


## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [[Create entities]](#create-entities)
- [Templates:](#templates)
- [Learn more:](#learn-more)
- [See also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Install

First, you need to have [NodeJS >= v8](https://nodejs.org/), which should come with the npm package manager.

If [wikibase-cli](https://github.com/maxlath/wikibase-cli) isn't already installed and configured:
```sh
sudo npm install --global wikibase-cli

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


## [Create entities]

See [Create entities](./create/README.md#create-entities)


## Templates:
* [templates to create entities](https://github.com/ontohgis/wikikul/tree/main/create)


## Learn more:
* [`wb create-entity`](https://github.com/maxlath/wikibase-cli/blob/main/docs/write_operations.md#wb-create-entity)
* [`wb edit-entity`](https://github.com/maxlath/wikibase-cli/blob/main/docs/write_operations.md#wb-edit-entity), specifically [Generate an edit object from a JS template function](https://github.com/maxlath/wikibase-cli/blob/main/docs/write_operations.md#generate-an-edit-object-from-a-js-template-function)
* [batch mode](https://github.com/maxlath/wikibase-cli/blob/main/docs/write_operations.md#batch-mode)
* [`wb generate-template`](https://github.com/maxlath/wikibase-cli/blob/main/docs/read_operations.md#wd-generate-template)


## See also
* [wikibase-cli-template-collection](https://github.com/maxlath/wikibase-cli-template-collection): wikibase-cli template collection
* [wikidata-scripting](https://github.com/maxlath/wikidata-scripting): examples of scripts to edit Wikidata
* [wikidata-misc](https://github.com/generalist/wikidata-misc): various Wikidata maintenance/upload scripts
