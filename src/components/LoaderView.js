import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import red from 'material-ui/colors/red';
import Tooltip from 'material-ui/Tooltip';

const styles = ()=> ({
  loader: {
    position: `fixed`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  loaded: {
    pointerEvents: `none`,
    opacity: `0`,

    transition: `opacity 1500ms ease-in-out`
  }
});

const LoaderView = (props)=> {
  const { classes } = props;

  return ReactDOM.createPortal(
    (
      <Tooltip
        classes={{ popper: props.loaded ? classes.loaded : ``}}
        title={props.error ? `ERROR!!` : props.loaded ? `Alright.` : `Juuuust a sec.`}
        open
      >
        <CircularProgress
          className={`${classes.loader} ${props.loaded ? classes.loaded : ``}`}
          size={50}
          style={props.error && { color: red[500] }}
        />
      </Tooltip>
    ),
    document.body
  );
};

LoaderView.propTypes = {
  classes: PropTypes.object.isRequired,
  loaded: PropTypes.bool,
  error: PropTypes.bool
};

export default withStyles(styles)(LoaderView);
