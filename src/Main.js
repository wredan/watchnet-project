import React from 'react';
import {  BrowserRouter as Router,
          Route, 
          Switch, 
        } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Video } from './Pages/Video';
import { ClasseVideo } from './Pages/VideoClass';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavigationBar';
import { Footer } from './components/footer';
import { Searching } from './Pages/Searching';
import { Disclaimer } from './components/disclaimer';

class Film extends React.Component{
  render() {
    return(
      <div>
        <ClasseVideo classe="Film"/>
      </div>
    );
  }
}

class SerieTV extends React.Component{
  render() {
    return(
      <div>
        <ClasseVideo classe="Serie TV"/>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Disclaimer />
        <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <NavBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/film" component={Film} />
              <Route path="/serieTV" component={SerieTV} />
              <Route path="/about" component={About} />
              <Route path="/video" component={Video} />
              <Route path="/searching" component={Searching} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </ScrollToTop>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
