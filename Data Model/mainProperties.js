export const data =
    [
        {
            id: 'P1',
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
            id: 'P2',
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
            id: 'P3',
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
            id: 'P4',
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
            id: 'P5',
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
            id: 'P6',
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
            id: 'P7',
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
        },
        {
            id: 'Q1',
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
            id: 'Q2',
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
            id: 'Q3',
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
            id: 'Q4',
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
            id: 'Q5',
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
        }
    ]
