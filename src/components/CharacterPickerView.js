import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class CharacterPickerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <ExpansionPanel onChange={(evt, expanded)=>this.openSesame(expanded)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{this.props.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul style={{ margin: 0 }}>
            {this.state.expanded && this.props.movies}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  openSesame(expanded) {
    if(expanded) {
      this.setState({expanded: true});
    }
  }
}

CharacterPickerView.propTypes = {
  name: PropTypes.string,
  movies: PropTypes.element
};
