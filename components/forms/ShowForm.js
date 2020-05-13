import React from 'react';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchForm} from '../../actions';

class  ShowForm extends React.Component{
    componentDidMount(){
    this.props.fetchForm(this.props.match.params.id);
    }
    render(){
        
        if(!this.props.form){
            return null;
        }
 return(
    
      <div>
    {this.props.form.name}
    {this.props.form.email}
     <div>
         <Link to="/" >
             Back
             </Link>
     </div>
     </div>
     );
}}
const mapStateToProps=(state,ownProps)=>{
    
    return {form:state.data[ownProps.match.params.id]};
    
}


export default connect(mapStateToProps,{fetchForm})(ShowForm);