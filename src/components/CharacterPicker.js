import React from 'react';
import PropTypes from 'prop-types';
import CharacterPickerView from './CharacterPickerView.js';

export default class CharacterPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ``
    };
  }

  render() {
    const characters = [];

    for(const [index, character] of this.props.data.characters.entries()) {
      characters.push(<CharacterPickerView key={index} name={character.name} movies={[]} />);
    }

    return characters;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidUpdate() {

  }
}

CharacterPicker.propTypes = {
  data: PropTypes.object
};
