// предопределение стате 
const usersState = ['@sank', '@sankbetter', '@sankbest'];
// создание редюсера 
const reducer = (state = usersState, action) => {
    // проверка прешедшей команды
    if(action.type === 'ADD_NEW_USER') {
	console.log(action);
	return state.concat(action.username);
    };
    return state;
}

export default reducer;
