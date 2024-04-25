export const data =
    [
        {
            id: 'P8',
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'płatnik podatku',
                en: 'taxpayer'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //https://www.wikidata.org/wiki/Q1938414
        },
        {
            id: 'P9',
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'część',
                en: 'Is Part Of'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //http://purl.org/dc/terms/isPartOf; https://www.wikidata.org/wiki/Property:P361; http://www.cidoc-crm.org/cidoc-crm/P46i_forms_part_of
        },
        {
            id: 'P10',
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'miejsce',
                en: 'place'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //http://www.cidoc-crm.org/cidoc-crm/P53_has_former_or_current_location; https://www.wikidata.org/wiki/Property:P276
        },
        {
            id: 'P25',
            type: 'property',
            datatype: 'wikibase-item',
            labels: {
                pl: 'podatek od',
                en: null
            },
            aliases: {
                pl: [
                    'przedmiot opodatkowania',
                    'przedmiot podatku'
                ]},
            descriptions: {
                pl: null,
                en: null
            }
        },
        {
            id: 'Q6',
            type: 'item',
            labels: {
                pl: 'instytucja',
                en: 'institution'
            },
            descriptions: {
                pl: null,
                en: null
            }
            //https://www.diva-portal.org/smash/get/diva2:1368936/FULLTEXT01.pdf; https://www.wikidata.org/wiki/Q178706
        }
        ]