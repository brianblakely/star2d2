import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = ()=> ({
  ulReset: {
    margin: 0,
    padding: 0
  },
  liReset: {
    marginBottom: `10px`,
    listStyle: `none`
  }
});

const CharacterPickerView = (props)=> {
  const { classes } = props;

  const movies = [];

  for(const [index, movie] of props.movies.entries()) {
    movies.push(
      <li key={index} className={classes.liReset}>
        <Typography variant="title" style={{ flex: 1 }}>
          {movie.title}
        </Typography>
        <Typography variant="subheading">
          {movie.releaseDate}
        </Typography>
      </li>
    );
  }

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{props.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul className={classes.ulReset}>
          {movies}
        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

CharacterPickerView.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  movies: PropTypes.array
};

export default withStyles(styles)(CharacterPickerView);
