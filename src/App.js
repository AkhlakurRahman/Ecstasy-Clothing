import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import Authentication from './Pages/Authentication/Authentication';
import { auth, createUserProfileDocument } from './utils/firebase';

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign-in" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
