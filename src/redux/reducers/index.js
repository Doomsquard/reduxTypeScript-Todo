import {ADD_DEAL,DELETE_DEAL,COMPLETE_DEAL,FILTER_DEAL } from "../types"
import {combineReducers} from 'redux'


const listState=[
    {
        deal:'learn redux',
        id:"1",
        completed:false
    },
    {
        deal:'learn ts',
        id:"2",
        completed:false
    }
]

const listReducer=(state=listState,action)=>{

    const idSort=()=>{
        for(let i=0;i<state.length;i++){
           if(state[i].id===action.payload.id){
               return i
           }
        }
    }

    
    
    


    switch(action.type){
        case ADD_DEAL:{
            return [...state,action.payload]
        }
        case DELETE_DEAL:{
            const currentItem=state[idSort()]
            return [...state.slice(0,currentItem),...state.slice(currentItem+1)]
        }
        case COMPLETE_DEAL:{
            const currentItem=state[idSort()]
            return [...state.slice(0,currentItem), {...currentItem, 
                completed: !action.payload.completed} ,...[state.slice(currentItem+1)]]
        }
        default:return [...state]
    }
}
export const rootReducer=combineReducers({listReducer})

