import React, { Suspense, lazy, } from "react"
import { Router, Switch, Route, Link} from "react-router-dom"

import Home from "./views/Home" 
import { history } from "./history"


class AppRouter extends React.Component {
    render() {
      return (
        // Set the directory path if you are deploying in sub-folder
        <Router history={history}> 
            <Switch>
                <Route 
                    exact  
                    path="/" >  
                    <Home/>
                </Route> 
            </Switch> 
        </Router>
      )
    }
  }
 
export default AppRouter
