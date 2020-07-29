import React, {Component} from "react"; 
import PropTypes from "prop-types";
import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-app">
          <div className="container">
            <h3>Header</h3>
          </div>
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;