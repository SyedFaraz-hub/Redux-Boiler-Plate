const INITIAL_STATE = {

    users: [
        { 
            name:"faraz",
            email:"faraz@gmail.com",
    },
]
}

export default (state = INITIAL_STATE,action )=>{
   
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users,action.payload]
            })
            break;
    
        default:
            return state
    }
    
} 