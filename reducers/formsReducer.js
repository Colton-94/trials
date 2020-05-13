import _ from 'lodash';

export default (state={},action)=>{
    switch(action.type){
        case "CREATE_FORM" :
            return {...state,[action.payload.id]:action.payload};
        case "FETCH_FORMS" :
            return {...state,..._.mapKeys(action.payload,'id')};
        case "FETCH_FORM":
            return {...state,[action.payload.id]:action.payload};
        case "EDIT_FORM" :
            return {...state,[action.payload.id]:action.payload};
        case "DELETE_FORM" :
            return (_.omit(state,action.payload));
        default :
            return state;
    }
}