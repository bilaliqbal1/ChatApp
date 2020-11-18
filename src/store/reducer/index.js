const INITIAL_STATE  =   {
    users: [],
    currentUsers : {}
}
export default (state = INITIAL_STATE, action) =>{
    // console.log("action",action )    
    switch (action.type){
            // case "SETDATA":
            //     return ({
            //         ...state,
            //         // app_name: action,
            //         users: [...state.users, action.payload]
            //     })
            case "SETUSER":
                return({
                    ...state,
                    currentUsers : action.payload
                })
            case    "SETFIREBASEUSERS":
                return({
                    ...state,
                    users: action.payload
                })
    }
    
    return state;
};