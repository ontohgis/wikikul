# WikiKUL

## About

Create entities in WikiKUL


## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Create entities](#create-entities)
- [Learn more:](#learn-more)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Create entities

```sh
cd wikikul/create

# ------------------
# Create entities related to [Define links for external identifiers](https://www.mediawiki.org/wiki/Wikibase/Installation/Advanced_configuration#Define_links_for_external_identifiers)

## Display the help menu of a template
wb create-entity ./prepare-ext-ids.js --help

## Get a preview of the generated edit
wb create-entity ./prepare-ext-ids.js --dry

## Actually make the edit
wb create-entity ./prepare-ext-ids.js

## Add settings to `LocalSettings.php` - REPLACE '/var/lib/wiki' WITH THE ACTUAL PATH TO THE `LocalSettings.php` FILE OF THE WikiKUL INSTANCE
echo "\$wgWBRepoSettings['formatterUrlProperty'] = '$(wb create-entity ./prepare-ext-ids.js  | jq -r '.entity | select(.labels.en.value == "formatter URL") | .id')';" >> /var/lib/wiki/html/w/LocalSettings.php
echo "\$wgWBRepoSettings['canonicalUriProperty'] = '$(wb create-entity ./prepare-ext-ids.js  | jq -r '.entity | select(.labels.en.value == "formatter URI for RDF resource") | .id')';" >> /var/lib/wiki/html/w/LocalSettings.php

# ------------------
# Add external identifiers for required prefixes

## Display the help menu of a template
wb create-entity ./create-prefix.js --help

## Get a preview of the generated edit
wb create-entity ./create-prefix.js ontohgis: https://onto.kul.pl/ontohgis/ --dry

## Actually make the edit
wb create-entity ./create-prefix.js ontohgis: https://onto.kul.pl/ontohgis/

## Get a preview of the generated edit
wb create-entity ./create-prefix.js ontowikikul: https://onto.kul.pl/ontowikikul/ --dry

## Actually make the edit
wb create-entity ./create-prefix.js ontowikikul: https://onto.kul.pl/ontowikikul/ --dry
```


## Learn more:
* [`wb create-entity`](https://github.com/maxlath/wikibase-cli/blob/main/docs/write_operations.md#wb-create-entity)
