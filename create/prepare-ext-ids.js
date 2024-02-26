const { getJSON, P } = require('../lib/helpers')

const ids = {
 'formatter URL': 'P1630',
 'formatter URI for RDF resource': 'P1921'
}

let s = [];
for (const [key, value] of Object.entries(ids)) { s.push(`${key} (${value})`); }

module.exports = {
  commands: [
    'create-entity'
  ],

  args: [],

  description: 'Create property required for External identifiers: "'+s.join('" and "')+'"',

  examples: [
    { comment: 'Create "formatter URI for RDF resource ('+ids['formatter URI for RDF resource']+')"' }
  ],

  template: async function () {
    const ret = [];
    for (const [id, label] of Object.keys(ids).entries()) {
      const prop = await P(label);
      if (prop === null) {
        const { getEntities } = require('wikibase-sdk')({ instance: 'https://www.wikidata.org' })
        const w = (await getJSON(getEntities({ ids: [ ids[label] ], language: 'en' })))['entities'][ids[label]]
        ret.push({type:w.type,datatype:w.datatype,labels:w.labels,descriptions:w.descriptions,aliases:w.aliases})
      } else {
        console.log(await JSON.stringify({entity:prop,success:1}))
      }
    }
    if(ret.length == 0) process.exit()

    return ret
  }
}


