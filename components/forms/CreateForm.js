import React from 'react';
import FormCreate from './FormCreate';
import {connect} from 'react-redux';
import {formCreation} from '../../actions';


class CreateForm extends React.Component{
   
    onSubmit=formValues=>{
      
        this.props.formCreation(formValues);
    };
    render(){
        if(this.props.isSigned){
    return (
    <div>CreateForm
    <FormCreate onSubmit={this.onSubmit} />
    </div>
    );
        }
    else
    return <div>Please sign In to create a form</div>;
}}

const mapStateToProps=state=>{
    return {isSigned:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{formCreation})(CreateForm);
