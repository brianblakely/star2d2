import React from 'react';
import PropTypes from 'prop-types';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  render() {
    const LoaderView = this.props.view;

    if(!this.props.children) {
      return (
        <LoaderView loaded={this.state.loaded} />
      );
    }
  }

  componentDidMount() {
    if(!this.props.children) {
      window.addEventListener(`load`, ()=> {
        this.setState({
          loaded: true
        });
      });
    }
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

Loader.propTypes = {
  view: PropTypes.element,
  children: PropTypes.func
};
