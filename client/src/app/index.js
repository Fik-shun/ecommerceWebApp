import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import { beforeLogin, MoviesList } from '../pages'
import { NavBar } from '../containers'

function App() {
  return (

		<Router>
			<Switch>
				{ (localStorage.getItem("JWT") === null) ? (
                  <Route path="/" exact component={beforeLogin} />
			    ) : (
			      <Fragment>
                    <NavBar />
                    <Route path="/" exact component={MoviesList} />
			      </Fragment>
			    )}
             
                <Route path="/sign-in" exact component={beforeLogin} />
                <Route path="/sign-up" exact component={beforeLogin} />

            </Switch>		    
		</Router>

 );
}

export default App;



