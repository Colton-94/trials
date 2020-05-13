import React from 'react';
import {reduxForm, Field} from 'redux-form';

class FormCreate extends React.Component{
    renderError=({touched,error})=>{
        if(touched&&error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderHelper=({input,label,meta})=>{

        const ame= `field ${meta.error&&meta.touched?'error':''}`
        return(
        <div className={ame}>
              <label >{label}</label> 
              <input {...input} autoComplete="off"/> 

              {this.renderError(meta)}
        </div>
        );
    };
    renderSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
    }


    render(){
        return(
          
                <form onSubmit={this.props.handleSubmit(this.renderSubmit)} className="ui form error">
                    <Field name="name" component={this.renderHelper} label="enter name" ></Field>
                    <Field name="email" component={this.renderHelper} label="enter email"></Field>
                    <Field name="phone" component={this.renderHelper} label="enter phone no"></Field>
                <button className="ui button primary">Submit</button>
                </form>
            
        );
    }
}
const  validate=formValues=>{
    const errors={};
    if(!formValues.name){
        errors.name='name cannot blank';
    }
    if(!formValues.email){
        errors.email='emal cannot blank';
    }
    if(!formValues.phone){
        errors.phone='should be number'; 
    }
    return errors;
}

export default reduxForm({
    form:'formCreate',validate
})(FormCreate);