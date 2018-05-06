import React from 'react';
import PropTypes from 'prop-types';
import CharacterPickerView from './CharacterPickerView.js';
import Loader from './Loader';
import LoaderView from './LoaderView';
import Typography from 'material-ui/Typography';

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
      characters.push(<CharacterPickerView key={index} name={character.name} movies={
        <Loader json={character.url} view={LoaderView}>
          {(charData)=> {
            const {films} = charData,
                  filmLoaders = [];

            for(const [index, film] of films.entries()) {
              filmLoaders.push(<Loader json={film} view={LoaderView} key={index}>
                {(filmData)=> (
                  <li>
                    <Typography variant="title" style={{ flex: 1 }}>
                      {filmData.title}
                    </Typography>
                    <Typography variant="subheading">
                      {filmData.release_date}
                    </Typography>
                  </li>
                )}
              </Loader>);
            }

            return filmLoaders;
          }}
        </Loader>
      } />);
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
