import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchForms,} from '../../actions';


class  ListForm extends React.Component{
    componentDidMount(){
        this.props.fetchForms();
    }
    renderAdmin=()=>{
    if(this.props.isSigned){
        return<div>Create</div>
    }}     
    renderContents=()=>{
        return   this.props.forms.map(form=>{
        
            return(
                   <div className="item" key={form.id}>
                       <div className="contents">
                           <Link to={`forms/edit/${form.id}`} className="ui right button">edit</Link>
     
                           <Link to={`/forms/${form.id}`}>
                          
                           {form.name}
                           
                           </Link>
                           
                       </div>
                       
                   </div> 
            )  
            })          
             

    }
    render(){
    return (
        <div>
            <Link to="/forms/new">
            {this.renderAdmin()}
            </Link>
            
            {this.renderContents()}
            
        </div>
    );
   
    }          
}   

        
    
    
    
const mapStateToProps=state=>{
    return {isSigned : state.auth.isSignedIn,
            forms:Object.values(state.data)                                };
}

export default connect(mapStateToProps,{fetchForms,})(ListForm);