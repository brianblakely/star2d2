import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
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

  return (
    <Tooltip
      classes={{ popper: props.loaded ? classes.loaded : ``}}
      title={props.loaded ? `Alright.` : `Juuuust a sec.`}
      open
    >
      <CircularProgress className={`${classes.loader} ${props.loaded ? classes.loaded : ``}`} size={50} />
    </Tooltip>
  );
};

LoaderView.propTypes = {
  classes: PropTypes.object.isRequired,
  loaded: PropTypes.bool
};

export default withStyles(styles)(LoaderView);
