import React, { Component } from 'react';
import Header from './components/Header';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Section from './components/Section';
import SemiHeader from './components/SemiHeader';
import Article from './components/Article';
import Testimonial from './components/Testimonial';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#ff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <SemiHeader />
        <Section />
        <Article />
        <Testimonial />
      </MuiThemeProvider>
    );
  }
}
export default App;
