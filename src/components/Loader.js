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

    if(this.state.error && !this.state.quit) {
      return (
        <LoaderView loaded={true} error={true} />
      );
    }

    if(!this.props.children && !this.state.quit) {
      return (
        <LoaderView loaded={this.state.loaded} />
      );
    } else if(this.props.children) {
      return (
        <React.Fragment>
          {!this.state.quit && <LoaderView loaded={this.state.loaded} />}
          {this.state.loaded && this.props.children(this.state)}
        </React.Fragment>
      );
    }

    return null;
  }

  componentDidMount() {
    if(!this.props.children) {
      window.addEventListener(`load`, ()=> {
        this.setState({
          loaded: true
        });
        this.quit();
      });
    } else if(this.props.json && !this.state.loaded) {
      this.loadJSON();
    }
  }

  loadJSON() {
    fetch(this.props.json)
      .then((response)=> {
        if(response.status === 200) {
          return response.json();
        } else {
          return Promise.reject();
        }
      })
      .then((data)=> {
        this.setState(Object.assign({
          loaded: true
        }, data));
        this.quit();
      }).catch(()=> {
        this.setState({
          loaded: false,
          error: true
        });
        this.quit();
      });
  }

  quit() {
    setTimeout(()=> {
      this.setState({
        quit: true
      });
    }, 1500);
  }
}

Loader.propTypes = {
  view: PropTypes.func,
  children: PropTypes.func,
  json: PropTypes.string
};
