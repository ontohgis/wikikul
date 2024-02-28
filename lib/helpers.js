const fetch = require('node-fetch')

const { statSync, readFileSync } = require('node:fs')
const instance_default = 'https://www.wikidata.org'
const conf_path = process.env.HOME + '/.config/wikibase-cli/config.json'
const i = process.argv.findIndex((a) => a.localeCompare('-i') == 0 || a.localeCompare('--instance') == 0)
const instance = i >= 0 ? process.argv[i+1] : statSync(conf_path, { throwIfNoEntry: false })?.isFile() ? JSON.parse(readFileSync(conf_path, { encoding: 'utf8' }) || "").instance || instance_default : instance_default

const { name, homepage } = require('../package.json')
const headers = {
  'user-agent': `${name} (${homepage.split('#')[0]})`
}

const getJSON = async url => {
  const res = await fetch(url, { headers })
  const { statusCode } = res
  const resText = await res.text()
  if (statusCode >= 400) throw new Error(`${statusCode}: ${resText}`)
  if (resText[0] !== '{') throw new Error(`invalid json: ${resText}`)
  return JSON.parse(resText)
}

const getEntity = async (label, type = 'item') => {
  // TEMPORARY WORKAROUND !!! "WB_INSTANCE" is not set correctly
  //const { searchEntities } = require('wikibase-sdk')({ instance: process.env.WB_INSTANCE })
  const { searchEntities } = require('wikibase-sdk')({ instance: instance })
  const url = searchEntities({ search: label, strictlanguage: 'True', type: type })
  const entities = await getJSON(url);
  const entity = entities['search'].filter((entity) => label.localeCompare(entity['label']) == 0 );
  if (entity.length == 1) {
    const { getEntities } = require('wikibase-sdk')({ instance: instance })
    return (await getJSON(getEntities({ ids: [ entity[0].id ], language: 'en' })))['entities'][entity[0].id]
  }
  else return null
}

const P = async (label) => {
  const Property = await getEntity(label, 'property')
  return Property
}

module.exports = {
  getJSON,
  getEntity,
  P,
}
