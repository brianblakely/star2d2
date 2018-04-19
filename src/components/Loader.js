import React from 'react';
import LoaderView from "./LoaderView";

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    return (
      <LoaderView loaded={this.state.loaded} />
    );
  }

  componentDidMount() {
    window.addEventListener(`load`, ()=> {
      this.setState({
        loaded: true
      });
    });
  }

  componentDidUpdate() {

  }

  loadJSON() {
    // fetch(this.props.json === `string`)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(apiData) {
    //     weatherData = apiData;
    //     render(tempUnit, apiData);
    //   });
  }
}
