const usersState = ['@sank', '@sankbetter', '@sankbest'];
const reducer = (state = usersState, action) => {
    if(action.type === 'ADD_NEW_USER') {
	console.log(action);
	return state.concat(action.username);
    };
    return state;
}

export default reducer;
