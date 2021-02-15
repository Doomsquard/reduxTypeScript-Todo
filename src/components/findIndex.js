export const findIndexById = (items, id) => {
	return items.findIndex((item) => item.itemId === id);
};

export const findItemById = (items, id) => {
	return items.findIndex((i) => i.id === id);
};
