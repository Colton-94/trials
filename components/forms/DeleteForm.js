import React from 'react';
import Modal from '../../Modal';
import {connect} from 'react-redux';
import {deleteForm,fetchForm}from '../../actions';
import {Link } from 'react-router-dom';


class  DeleteForm extends React.Component{
    componentDidMount(){
        this.props.fetchForm(this.props.match.params.id);
    }
    action(){
        return(
            <React.Fragment>
            <button onClick={()=>this.props.deleteForm(this.props.match.params.id)}className="ui button negative"> DELETE</button>
            <Link to={"/"} className="ui button">CANCEL </Link>    
            </React.Fragment>
        );
    }
    content(){
        if(!this.props.form){
            return 'Are you Sure??'
        }
        return `Are you sure u want to delete:${this.props.form.name}`;
    }
    render(){
        return (
        <Modal 
        title="DELETE A FORM"
        content={this.content()}
        actions={this.action()}/>);        
        }  
}

const mapStatetoProps=(state,ownProps)=>{
    return {form:state.data[ownProps.match.params.id]}
}
export default connect(mapStatetoProps,{deleteForm,fetchForm})(DeleteForm);