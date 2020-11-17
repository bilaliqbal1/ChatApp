const INITIAL_STATE  =   {
    users: [{
        name: "bilal",
        email: "bilal@gmail.com"
    },
    {
        name: "bilal",
        email: "bilal@gmail.com"
    }]
}
export default (state = INITIAL_STATE, action) =>{
    console.log("action",action )    
    switch(action.type){
            case "SETDATA":
                return ({
                    ...state,
                    // app_name: action,
                    users: "home fatch data"
                })
        }
    
    return state;
}