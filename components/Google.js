import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class Google extends React.Component{
componentDidMount(){
    window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId: 
            '455261110954-1p8pj45c8rv6ghjhbuj8i156oars9bh6.apps.googleusercontent.com',
            scope:'email'
        }).then(()=>{
            this.auth=window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        })
    })

}
onAuthChange=(isSignedIn)=>{
if(isSignedIn){
    this.props.signIn(this.auth.currentUser.get().getId());
}
else
    this.props.signOut();
}

sign=()=>{
    if(this.props.isSigned===null){
        return null;
    }
    else if(!this.props.isSigned){
        return(
            <div >
                <button onClick={this.signInClick} className="ui button primary">SignIn</button>
            </div>
        )
    }
        else {
            return(
                <div>
                    <button onClick={this.signOutClick} className="ui button negative">SignOut</button>
                </div>
            )
        }
}
signInClick=()=>{
    this.auth.signIn();
}
signOutClick=()=>{
    this.auth.signOut();
}




    render(){
        return(
        <div>{this.sign()}</div>
        );
    }
}
const mapStateToProps=state=>{
    return {isSigned : state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(Google);