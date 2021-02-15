import {
	ADD_DEAL,
	DELETE_DEAL,
	FILTER_DEAL,
	COMPLETE_DEAL,
	ADD_CARD,
	DELETE_CARD,
} from '../types';

const itemId = () => `i${(~~(Math.random() * 1e8)).toString(16)}`;
const cardId = () => `c${(~~(Math.random() * 1e8)).toString(16)}`;

export const addItem = (text, id) => {
	return {
		type: ADD_DEAL,
		id,
		payload: {
			id: itemId(),
			deal: text,
			completed: false,
		},
	};
};

export const addCard = (title) => {
	return {
		type: ADD_CARD,
		payload: {
			title,
			itemId: cardId(),
			listDeal: [],
		},
	};
};

export const deleteItem = (cardId, itemId) => {
	return {
		type: DELETE_DEAL,
		payload: {
			id: cardId,
			itemId,
		},
	};
};

export const deleteCard = (cardId) => {
	return {
		type: DELETE_CARD,
		payload: {
			itemId: cardId,
		},
	};
};

export const completeDeal = (cardId, itemId) => {
	return {
		type: COMPLETE_DEAL,
		payload: {
			id: cardId,
			itemId,
		},
	};
};
