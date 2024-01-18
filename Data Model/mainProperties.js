export const data =
    [
        {
            id: null,
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'Typ',
                en: 'Type'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //http://www.cidoc-crm.org/cidoc-crm/P2i_is_type_of
            //http://www.cidoc-crm.org/cidoc-crm/P2_has_type
        },
        {
            id: null,
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'miejscowość',
                en: 'locality'
            },
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: null,
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'dekanat',
                en: 'deanery'
            },
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: null,
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'diecezja',
                en: 'diocese'
            },
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: null,
            type: 'property',
            datatype: 'time',
            labels: {
                pl: 'data',
                en: 'date'
            },
            descriptions: {
                pl: null,
                en: 'Date may be used to express temporal information at any level of granularity. Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF].'
            }
            //http://purl.org/dc/terms/date
        },
        {
            id: null,
            type: 'property',
            datatype: 'external-id',
            labels: {
                pl: 'ontohgis',
                en: 'ontohgis'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //http://purl.org/dc/terms/identifier; that maybe in ontohgis you should replace some rdfs:seeAlso that refer to identifiers by property: http://purl.org/dc/terms/identifier
        },
        {
            id: null,
            type: 'item',
            labels: {
                pl: 'Osoba',
                de: 'Person',
                en: 'Person',
                fr: 'Personne',
                pt: 'Pessoa',
                el: 'Πρόσωπο',
                ru: 'Личность',
                zh: '人物'
            },
            descriptions: {
                pl: null,
                en: null
            }
          //http://www.cidoc-crm.org/cidoc-crm/E21_Person  
        },
        {
            id: null,
            type: 'item',
            labels: {
                pl: 'parafia (Kościół katolicki ob. łacińskiego)',
                en: 'parish (Latin Church)',
                de: 'Pfarre',
                la: 'parochia',
                ru: 'парафия'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //https://onto.kul.pl/ontohgis/administrative_type_144
        },
        {
            id: null,
            type: 'item',
            labels: {
                pl: 'właściwa miejscowość',
                en: 'proper dwelling',
            },
            descriptions: {
                pl: null,
                en: null
            }
            //https://onto.kul.pl/ontohgis/settlement_type_1000
        },
        {
            id: null,
            type: 'item',
            labels: {
                pl: 'dekanat (Kościół katolicki ob. łacińskiego)',
                en: 'deanery (Latin Church)',
                la: 'decanatus'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //https://onto.kul.pl/ontohgis/administrative_type_150
        },
        {
            id: null,
            type: 'item',
            labels: {
                pl: 'diecezja (Kościół katolicki ob. łacińskiego)',
                en: 'diocese (Latin Church)',
                de: 'Diözese',
                la: 'dioecesis'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //https://onto.kul.pl/ontohgis/administrative_type_147
        },
        {
            id: null,
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'wyznanie',
                en: 'denomination'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //https://dbpedia.org/ontology/denomination
        }
    ]
