import React from 'react';
import Google from './Google';
import {Link} from 'react-router-dom';


class  Header extends React.Component{
    render(){
    
        return(
            
                <div className="ui secondary pointng menu">
            
                    <h3>
                        <Link to="/">
                    Welocme to Portal!!
                    </Link>
                    </h3>
                
                <div className="right menu">
                    <Google />
                </div>
                </div>
            
             
            );
    }

}

export default Header;