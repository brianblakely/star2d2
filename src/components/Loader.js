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
    } else {
      return (
        <React.Fragment>
          <LoaderView loaded={this.state.loaded} />
          {this.state.loaded && this.props.children(this.state)}
        </React.Fragment>
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
    } else if(this.props.json && !this.state.loaded) {
      this.loadJSON();
    }
  }

  loadJSON() {
    fetch(this.props.json)
      .then((response)=> {
        return response.json();
      })
      .then((data)=> {
        this.setState(Object.assign({
          loaded: true
        }, data));
      });
  }
}

Loader.propTypes = {
  view: PropTypes.func,
  children: PropTypes.func,
  json: PropTypes.string
};
