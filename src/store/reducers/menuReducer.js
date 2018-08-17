import { ACTIVE_MENU_LINK } from '../actions/MenuAction';

const initialState = {
	menuLink: 'home'
};

export default (state = initialState, action) => {
	
	switch (action.type) {
		
		case ACTIVE_MENU_LINK:
			return {
				...state,
				menuLink: action.payload
			};
			
		default:
			return state;
	}
}