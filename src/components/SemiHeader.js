import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
const styles = {
  semi: {
    display: 'flex',
    alignItems: 'center',
  },
  icn: {
    margin: '1rem',
  },
};
class SemiHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.semi}>
        <Typography className={classes.icn}>Marketplace</Typography>
        <Typography className={classes.icn}>WholeSale Center</Typography>
        <Typography className={classes.icn}>Seller Center</Typography>
        <Typography className={classes.icn}>Services</Typography>
        <Typography className={classes.icn}>InternShip</Typography>
        <Typography className={classes.icn}>Event</Typography>
      </Card>
    );
  }
}
SemiHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SemiHeader);
