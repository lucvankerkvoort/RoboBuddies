import React from "react";
import { connect } from "react-redux";
import Card from "./components/Card";
import Search from "./components/Search";
import Scroll from "./components/Scroll";
import ErrorBoundry from "./components/ErrorBoundry";
import { robots } from "./components/robots";
import "./App.css";

import { setSearchField } from "./actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends React.Component {
  state = {
    robots: robots,
  };

  componentDidMount = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App">
        <h1>RoboFriends</h1>
        <Search search={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Card robots={filterRobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
