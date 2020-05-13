//import React from 'react';
import form from '../api/form';
import history from '../history';


export const signIn=(userId)=>{
    return {
        type:'SIGN_IN',
        payload:userId
    };
};

export const signOut=()=>{
    return {
        type:'SIGN_OUT'
        
    };
};

export const formCreation=(formValues)=> {
    return async (dispatch)=>{  
    const resp = await form.post('/form', formValues);
 dispatch({type:'CREATE_FORM', payload : resp.data});
 
    history.push(`/forms/${resp.data.id}`)
};
};

export const fetchForms=()=> async (dispatch)=>{
    const resp=await form.get('/form');
    dispatch({type:'FETCH_FORMS',payload:resp.data});
};

export const fetchForm=(id)=> async (dispatch)=>{
    const resp=await form.get(`/form/${id}`);
    dispatch({type:'FETCH_FORM',payload:resp.data});
};

export const editForm=(id,formValues)=> async (dispatch)=>{
    const resp=await form.patch(`/form/${id}`,formValues);
    dispatch({type:'EDIT_FORM',payload:resp.data});
    history.push('/')
};
export const deleteForm=(id)=> async (dispatch)=>{
    await form.delete(`form/${id}`)
    dispatch({type:'DELETE_FORM',payload:id})
    history.push('/')
};
