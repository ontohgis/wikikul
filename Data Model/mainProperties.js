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
            id: 'P11',
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: null,
                en: 'subClassOf'
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
        },
        {
            id: 'Q2893',
            type: 'item',
            labels: {
                pl: 'budynek mieszkalny',
                en: 'housing building'
            },
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: 'Q2894',
            type: 'item',
            labels: {
                pl: 'budynek',
                en: 'building'
            },
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: 'Q2895',
            type: 'item',
            labels: {
                pl: 'kościół - obiekt',
                en: 'church'
            },
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: 'Q2901',
            type: 'item',
            labels: {
                pl: 'folwark',
                en: 'demesne'
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf proper dwelling
                P11: [
                    'Q3',
                ]
            }
        },
        {
            id: 'Q2902',
            type: 'item',
            labels: {
                pl: 'miasto',
                en: 'city / town'
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf proper dwelling
                P11: [
                    'Q3',
                ]
            }
        },
        {
            id: 'Q2903',
            type: 'item',
            labels: {
                pl: 'wieś',
                en: 'village'
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf proper dwelling
                P11: [
                    'Q3',
                ]
            }
        },
        {
            id: 'Q2904',
            type: 'item',
            labels: {
                pl: 'klasztor - obiekt',
                en: 'monastery'
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf housing building
                P11: [
                    'Q2893',
                ]
            }
        },
        {
            id: 'Q2905',
            type: 'item',
            labels: {
                pl: 'kaplica - obiekt',
                en: 'chapel'
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf building
                P11: [
                    'Q2894',
                ]
            }
        },
        {
            id: 'Q2906',
            type: 'item',
            labels: {
                pl: 'kościół filialny',
                en: null
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf church
                P11: [
                    'Q2895',
                ]
            }
        },
        {
            id: 'Q2907',
            type: 'item',
            labels: {
                pl: 'kościół katedralny',
                en: null
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf church
                P11: [
                    'Q2895',
                ]
            }
        },
        {
            id: 'Q2908',
            type: 'item',
            labels: {
                pl: 'kościół kolegiacki',
                en: null
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf church
                P11: [
                    'Q2895',
                ]
            }
        },
        {
            id: 'Q2909',
            type: 'item',
            labels: {
                pl: 'kościół szpitalny',
                en: null
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf church
                P11: [
                    'Q2895',
                ]
            }
        },
        {
            id: 'Q3646',
            type: 'item',
            labels: {
                pl: 'osada',
                en: 'settlement'
            },
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: 'Q3647',
            type: 'item',
            labels: {
                pl: 'osada młyńska',
                en: 'mill settlement'
            },
            descriptions: {
                pl: null,
                en: null
            },
            claims: {
                //subClassOf settlement
                P11: [
                    'Q3646',
                ]
            }
        },
    ]
