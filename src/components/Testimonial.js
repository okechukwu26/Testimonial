import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import wom from '../images/wom.png';
import man from '../images/man.png';
import girl from '../images/girl.png';
import gg from '../images/gg.png';
import ff from '../images/ff.png';
const styles = {};

class Testimonial extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <img src={wom} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            voluptatibus esse fuga, sed ipsam veniam dolor consequatur est?
            Rerum iure debitis atque similique blanditiis officiis quos possimus
            vitae tempore molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum velit dolore quo, beatae quaerat libero
            et, cumque ipsa asperiores similique voluptatibus quasi iure laborum
            temporibus maiores corporis saepe expedita eaque!
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={man} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            voluptatibus esse fuga, sed ipsam veniam dolor consequatur est?
            Rerum iure debitis atque similique blanditiis officiis quos possimus
            vitae tempore molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum velit dolore quo, beatae quaerat libero
            et, cumque ipsa asperiores similique voluptatibus quasi iure laborum
            temporibus maiores corporis saepe expedita eaque!
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={girl} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            voluptatibus esse fuga, sed ipsam veniam dolor consequatur est?
            Rerum iure debitis atque similique blanditiis officiis quos possimus
            vitae tempore molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum velit dolore quo, beatae quaerat libero
            et, cumque ipsa asperiores similique voluptatibus quasi iure laborum
            temporibus maiores corporis saepe expedita eaque!
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={gg} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            voluptatibus esse fuga, sed ipsam veniam dolor consequatur est?
            Rerum iure debitis atque similique blanditiis officiis quos possimus
            vitae tempore molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum velit dolore quo, beatae quaerat libero
            et, cumque ipsa asperiores similique voluptatibus quasi iure laborum
            temporibus maiores corporis saepe expedita eaque!
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={ff} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            voluptatibus esse fuga, sed ipsam veniam dolor consequatur est?
            Rerum iure debitis atque similique blanditiis officiis quos possimus
            vitae tempore molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum velit dolore quo, beatae quaerat libero
            et, cumque ipsa asperiores similique voluptatibus quasi iure laborum
            temporibus maiores corporis saepe expedita eaque!
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={ff} alt='' />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            voluptatibus esse fuga, sed ipsam veniam dolor consequatur est?
            Rerum iure debitis atque similique blanditiis officiis quos possimus
            vitae tempore molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum velit dolore quo, beatae quaerat libero
            et, cumque ipsa asperiores similique voluptatibus quasi iure laborum
            temporibus maiores corporis saepe expedita eaque!
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Testimonial);
