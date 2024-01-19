import WBEdit from 'wikibase-edit'
import {data} from "./Data Model/mainProperties.js";

const generalConfig = {
    instance: process.argv[2],
    credentials: {
        username: process.argv[3],
        password: process.argv[4]
    }
}
const wbEdit = WBEdit(generalConfig)

async function createObjectsFromList(arg){
    for(let i = 0; i< arg.length; i++){
        try{
            const {entity} = await wbEdit.entity.create(
            arg[i]
        )
            console.log('created object: ', entity.id)
            console.log('object type: ', entity.type)
            console.log('labels: ', entity.labels)
        }
        catch(err){
            console.log('ERROR')
            console.log('Object to create: '+ JSON.stringify(arg[i]))
            console.log('Server error reason: '+err.body.error.messages[1])
            console.log(err)
        }
    }
}

createObjectsFromList(data)