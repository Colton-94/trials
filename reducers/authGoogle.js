

const initial_State={
    userId:null,
    isSignedIn:null
};

export default (state=initial_State, action)=>{
    switch(action.type){
        case 'SIGN_IN' :
            return{...state,isSignedIn:true,userId:action.payload};
        case 'SIGN_OUT' :
            return{...state,isSignedIn:false,userId:null};
        default:
            return state;
    }
}