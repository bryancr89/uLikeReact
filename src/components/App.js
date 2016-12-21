import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--waterfall">
          
          <div className="mdl-layout__header-row">
            
          
            <span className="mdl-layout-title">uLike</span>

            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="waterfall-exp">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" name="sample" id="waterfall-exp"/>
              </div>
              <div>
              </div>
            </div>
          </div>
          
          <div className="mdl-layout__header-row">
            <div className="mdl-layout-spacer"></div>
            
            <nav className="mdl-navigation">
              <Link to="/login" className="mdl-navigation__link">login1</Link>
              <Link to="/fuel-savings" className="mdl-navigation__link">Demo App</Link>
              <Link to="/movies" className="mdl-navigation__link">Movies</Link>
              <Link to="/about" className="mdl-navigation__link">About</Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <Link to="/login" className="mdl-navigation__link">login1</Link>
            <Link to="/fuel-savings" className="mdl-navigation__link">Demo App</Link>
            <Link to="/movies" className="mdl-navigation__link">Movies</Link>
            <Link to="/about" className="mdl-navigation__link">About</Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
