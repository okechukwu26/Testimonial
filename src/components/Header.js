import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Icon from '../images/vv.png';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  card: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
  },
  span: {
    fontSize: '1rem',
    color: 'orange',
    margin: '0',
    padding: '0',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  sign: {
    textDecoration: 'none',
    color: '#000',
    paddin: '0.5rem',
    margin: '4px',
  },
  btn: {
    margin: '.5rem',
    backgroundColor: 'orange',
    padding: '0.3rem',
    borderColor: 'orange',
    outline: 'none',
    borderRadius: '3px',
  },
};

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <AppBar position='static' className={classes.card}>
          <Toolbar className={classes.toolbar}>
            <img src={Icon} alt='' />
            <Typography variant='h3'>
              Vasiti <span className={classes.span}>.com</span>
            </Typography>
            <Typography variant='h5'>
              <div className={classes.nav}>
                <a href='/' className={classes.sign}>
                  {' '}
                  About
                </a>
                <a href='/' className={classes.sign}>
                  {' '}
                  stories
                </a>
                <a href='/' className={classes.sign}>
                  {' '}
                  contact
                </a>
                <a href='/' className={classes.sign}>
                  {' '}
                  login
                </a>
                <button className={classes.btn}>SignUp</button>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Card>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
