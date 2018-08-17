export const ACTIVE_MENU_LINK = 'ACTIVE_MENU_LINK';

export const makeActiveLink = (linkName) => ({
	type: ACTIVE_MENU_LINK,
	payload: linkName
});