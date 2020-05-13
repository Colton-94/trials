import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
//import Header from './Header';

import ListForm from './forms/ListForm';
import CreateForm from './forms/CreateForm';
import EditForm from './forms/EditForm';
import DeleteForm from './forms/DeleteForm';
import ShowForm from './forms/ShowForm';
import Header from './Header';

import history from '../history';


const App=()=> {
    
    return (
            <div>
                
                <Router history={history} >
                <div className="ui container">
                <Header />  
                <Switch >  
                 
                <Route path="/forms/new" exact component={CreateForm} />
                <Route path="/forms/edit/forms/delete/:id" exact component={DeleteForm} />
                <Route path="/" exact component={ListForm} />   
                <Route path="/forms/:id" exact component={ShowForm} /> 
                <Route path="/forms/edit/:id" exact component={EditForm} />             
                    </Switch>
                </div>
            </Router>
                    
            
            </div>);
    };  



export default App;     