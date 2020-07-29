import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "../../layout/layout";
import Home from "../home-app/home-app.jsx";
import "./App.css";

const AppRoute = ({component:Component, layout:Layout, ...rest}) => {
 return (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props}/>
    </Layout>
  )}></Route>
 );
};
  
AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired
};


function App() {
  let renderHome = () => <Home/>;
  return (
    <BrowserRouter>
        <AppRoute path="/" layout={Layout} component={renderHome} />
    </BrowserRouter>
  );
}

export default App;
