import {
	ADD_DEAL,
	DELETE_DEAL,
	COMPLETE_DEAL,
	FILTER_DEAL,
	DELETE_CARD,
	ADD_CARD,
} from '../types';
import { combineReducers } from 'redux';
import { findIndexById, findItemById } from '../../components/findIndex';

const cardState = [
	{
		title: 'test',
		itemId: '1',
		listDeal: [
			{
				id: 1,
				deal: 'lear learn',
				completed: false,
			},
		],
	},
];

const cardReducer = (state = cardState, action) => {
	switch (action.type) {
		case ADD_CARD: {
			return [...state, action.payload];
		}
		case DELETE_CARD: {
			const currentCard = findIndexById(state, action.payload.itemId);
			const leftSide = state.slice(0, currentCard);
			const rightSide = state.slice(currentCard + 1);
			state = [...leftSide, ...rightSide];
			console.log(leftSide, rightSide);
			return [...state];
		}
		case ADD_DEAL: {
			const currentItem = findIndexById(state, action.id);
			state[currentItem].listDeal.push(action.payload);
			return [...state];
		}

		case DELETE_DEAL: {
			const currentItem = findIndexById(state, action.payload.id);
			const leftSide = state[currentItem].listDeal.slice(
				0,
				findItemById(state[currentItem].listDeal, action.payload.itemId),
			);

			const rightSide = state[currentItem].listDeal.slice(
				findItemById(state[currentItem].listDeal, action.payload.itemId) + 1,
				state[currentItem].length,
			);
			console.log(leftSide, rightSide);
			if (state[currentItem].listDeal.length > 1) {
				state[currentItem].listDeal = [...leftSide, ...rightSide];
			} else {
				state[currentItem].listDeal = [...[]];
			}

			return [...state];
		}

		case COMPLETE_DEAL: {
			const currentCard = findIndexById(state, action.payload.id);
			let currentItem = findItemById(
				state[findIndexById(state, action.payload.id)].listDeal,
				action.payload.itemId,
			);
			if (currentItem === -1) {
				currentItem = 0;
			}
			state[currentCard].listDeal[currentItem].completed = !state[currentCard]
				.listDeal[currentItem].completed;

			return [...state];
		}

		default:
			return [...state];
	}
};

export const rootReducer = combineReducers({ cardReducer });

// const listState={
//     listName:'testList',
//     list:[
//         {
//             deal:'learn redux',
//             id:"1",
//             completed:false
//         },
//         {
//             deal:'learn ts',
//             id:"2",
//             completed:false
//         }
//     ]
// }

// const cardLIst=[
//     listState
// ]

// const cardReducer=(state=cardLIst,action)=>{
//     switch(action.type){
//         case ADD_CARD:{
//             return [...state,action.payload.obj]
//         }
//         case DELETE_CARD:{
//             return [...state.slice(0,action.payload.id),state.slice(action.payload.id+1)]
//         }
//         default:{
//             return [...state]
//         }
//     }
// }

// const listReducer=(state=cardLIst,action)=>{

//     const currentList=()=>{
//         for(let i=0;i<state.length;i++){
//             if(state.list[i].listName===action.currentItem){
//                 return i
//             }
//         }

//     }

//     const idSort=()=>{
//         for(let i=0;i<list.length;i++){
//            if(list[i].id===action.payload.id){
//                return i
//            }
//         }
//     }
//     const list=state.list[currentList()]

//     switch(action.type){
//         case ADD_DEAL:{
//             return [...list,action.payload]
//         }
//         case DELETE_DEAL:{
//             const currentItem=list[idSort()]
//             return [...list.slice(0,currentItem),...list.slice(currentItem+1)]
//         }
//         case COMPLETE_DEAL:{
//             const currentItem=list[idSort()]
//             return [...list.slice(0,currentItem), {...currentItem,
//                 completed: !action.payload.completed} ,...[list.slice(currentItem+1)]]
//         }
//         default:return [...list]
//     }
// }
// export const rootReducer=combineReducers({listReducer,cardReducer})
