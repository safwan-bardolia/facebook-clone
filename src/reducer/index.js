export const initialState = {
    user:null
}

// reducer takes some existing amount of data(here 'state' of DataLayer, at start this 'state' is 'initialState') & action object
const reducer = (state, action) => {

        // very imp for debugging, it gives which action is dispatch right now
        console.log(action);

        switch(action.type) {
            case 'SET_USER' :
                // return new state by updating 'user' property
                return {
                    ...state, user: action.user
                }
            
            default:
                return state;    
        }
}

export default reducer;