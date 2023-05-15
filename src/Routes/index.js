import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import LandingPage from '../Screens/LandingScreen';
import Header from '../components/Header'
import Login from '../components/Login';
import Home from '../components/Home'
import Profile from '../components/Profile'
const PrivateRoute = (props)=>{
  const token = localStorage.getItem('sessionToken');

  if(token){
   return <Route exact={true} path={props.path} component={props.component}  />
  }else{
   return <Login {...props} />
  }
}


const Routes = () => {
  return (
    <>
        <BrowserRouter>
        <Header/>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path='/login' component={Login} />

          </Switch>
        </BrowserRouter>
    </>
  );
};

export default Routes;
