const INITIAL_STATE= {
    users:[
        {
            name:"popyi",
            age:"20+",
            email:"popy@gmail.com"
        }
        ,
        // // global state here we can call it everywhere from here
        // // can make multiple reducer then connect it in store/index.js using {combine reducer}
        {
            name:"bibi",
            age:"2+",
            email:"ghous@gmail.com"
        },
    ]
}
export default(state = INITIAL_STATE,action)=>{
    console.log("action",action)
    switch (action.type) {
        case "SETDATA":
            return({
                ...state,
                users:[...state.users,action.userss]
                // return will return data in oper wali state
            })
            
         
    }
    return state;

}