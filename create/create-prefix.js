const { P } = require('../lib/helpers')

module.exports = {
  commands: [
    'create-entity'
  ],

  args: '<label> <url>',

  description: 'Create property of type "external-id" with label="<label>" having formatter template "<url>$1"',

  examples: [
    { args: [ 'ontohgis:', 'https://onto.kul.pl/ontohgis/' ], comment: "Create 'ontohgis:' prefix with claim:{'formatter URL':'https://onto.kul.pl/ontohgis/$1', 'formatter URI for RDF resource':'https://onto.kul.pl/ontohgis/$1' }" }
  ],

  template: async function (label, url) {
    const p = await P(label)
    if (p !== null) {
      console.log(JSON.stringify({entity:p,success:1}))
      process.exit()
    }
    return {
      type:	'property',
      datatype:	'external-id',
      labels: {
        en: label
      },
      descriptions: {
        en: `@prefix ${label} <${url}> .`
      },
      claims: {
        [(await P('formatter URL'))['id']]: `${url}\$1`,
        [(await P('formatter URI for RDF resource'))['id']]: `${url}\$1`
      }
    }
  }
}


