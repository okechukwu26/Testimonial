import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Text from '../images/test.png';
const styles = {
  paper: {
    background: '#fff',
  },
  text: {
    fonWweight: 'bold',
    textTransform: 'capitalize',
    fontSize: '4rem',
    fontFamily: 'sans serif',
    alignItem: 'center',
    margin: '7rem 0',
    marginLeft: '1rem',
  },
  para: {
    fontSize: '1.5rem',
    color: 'grey',
  },
};

class Section extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.paper}>
        <Grid item xs={12} sm={5} className={classes.text}>
          Amazing Experiences from Our wonderful Clients
          <p className={classes.para}>
            Here is what customers and vendors are saying about us, you can
            share your story with us
          </p>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={Text} alt='' />
        </Grid>
      </Grid>
    );
  }
}
Section.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
