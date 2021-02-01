import {ADD_DEAL,DELETE_DEAL,FILTER_DEAL,COMPLETE_DEAL} from '../types'

const id = `f${(~~(Math.random()*1e8)).toString(16)}`

export const addItem=(text)=>{
    return {
        type:ADD_DEAL,
        payload:{
            deal:text,
            id:id,
            completed:false
        }
    }
}