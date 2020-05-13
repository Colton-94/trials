import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchForm,editForm} from '../../actions';
import FormCreate from './FormCreate';
import {Link} from 'react-router-dom';

class EditForm extends React.Component{
    componentDidMount(){
        this.props.fetchForm(this.props.match.params.id);
    }
    onSubmit=formValues=>{
        this.props.editForm(this.props.match.params.id,formValues);
    }
    render(){
        if(!this.props.data){
            return <div>loading</div>
        }
    return( 
        
           <div>
            <div className="ui button">
                <FormCreate 
                initialValues={_.pick(this.props.data,'name','email')}
                onSubmit={this.onSubmit} />
            </div>
            <div className="ui ">
                <Link to={`forms/delete/${this.props.data.id}`} className="ui button negative">Delete</Link>
            </div>
            </div>
    );
}
}
const mapStatetoProps=(state,OwnProps)=>{
    return {data:state.data[OwnProps.match.params.id]}
}
export default connect(mapStatetoProps,{fetchForm,editForm})(EditForm);