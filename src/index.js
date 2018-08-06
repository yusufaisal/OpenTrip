import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import './index.css';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import yellow from 'material-ui/colors/yellow';
import cyan from 'material-ui/colors/cyan';

import Home from './containers/home';
import Login from './containers/login_form';
import CreateTrip from './containers/create_trip';
import Signup from './containers/signup';
import Trip from './containers/view_trip';

import { AUTHENTICATED } from './actions';

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if (user) {
    store.dispatch({ type: AUTHENTICATED });
}

const styles = {
    container: {
        height: "100%",
    }
}
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            light: '#FFF176',
            dark: '#F57F17',
            contrastText: '#000'
        },
        secondary: {
            main: '#009688',
            light: '#4DB6AC',
            dark: '#004D40',
            contrastText: '#FFF'
        },
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
        datePicker: {
            selectColor: '#009688',
        },
    }
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <div style={styles.container}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/create_trip" component={CreateTrip} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/trip/:id" component={Trip}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root')
);
registerServiceWorker();
