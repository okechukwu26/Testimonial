import React from 'react';
import Two from '../images/two.png';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const styles = {
  back: {
    background: '#000',
  },
  img: {
    margin: '2rem 0',
  },
  type: {
    color: '#fff',
    margin: '2rem 0',
  },
  btn: {
    margin: '5px 0 5px 5px',
    background: '#000',
    color: '#fff',
  },
  btm: {
    marginTop: '2rem',
    padding: '1rem',
  },
  lorem: {
    fontSize: '1.5rem',
  },
};

function Article(props) {
  const { classes } = props;
  return (
    <Card>
      <Grid container className={classes.back}>
        <Grid item xs={12} sm={6} className={classes.img}>
          <img src={Two} alt='' />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.type}>
          <h1>Tolu & joy experience</h1>
          <button className={classes.btn}>Customer</button>
          <p className={classes.lorem}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quas
            rem nisi quo natus pariatur, ut ea optio voluptate numquam neque
            nihil adipisci, odio voluptates dolorem enim reprehenderit autem
            vero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem, repellendus quisquam recusandae animi minima hic quidem quis
            provident, ipsa ea natus exercitationem molestias maxime accusamus
            officiis molestiae? Dolorum, pariatur dicta!
          </p>
          <p className={classes.btm}>Share your own story</p>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withStyles(styles)(Article);
