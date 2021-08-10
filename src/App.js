import './App.css';
import {Tabs, Tab, AppBar} from '@material-ui/core';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Home from './components/Home';
import Passenger from './services/Passenger';
import Airline from './components/Airline';
import AirlineForm from './components/AirlineForm';
import Setting from './components/Setting';
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  const routes =['/' , '/passenger', '/airline', '/setting', '/airlineform'];

  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/'
        render ={(history) => (
          
          <AppBar>
            <Tabs 
            value={
              history.location.pathname
            }>
              <Tab 
                value = {routes[0]}
                label="home"
                component ={Link}
                to={routes[0]} />

              <Tab 
                value = {routes[1]}
                label="passenger"
                component ={Link}
                to={routes[1]} />

              <Tab 
                value = {routes[2]}
                label="airline"
                component ={Link}
                to={routes[2]} />

                <Tab 
                value = {routes[4]}
                label="airlineform"
                component ={Link}
                to={routes[4]} />

              <Tab 
                value = {routes[3]}
                label="setting"
                component ={Link}
              to={routes[3]} />
                

            </Tabs>
          </AppBar>
        )}/>

        <Switch>
          <Route exact path='/' component ={Home} />
          <Route path='/passenger' component ={Passenger} />
          <Route path='/airlineform' component ={AirlineForm} />
          <Route path='/setting' component ={Setting} />
          <ProtectedRoute path='/airline' component={Airline} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
