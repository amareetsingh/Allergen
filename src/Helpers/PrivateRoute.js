import React, {Suspense} from 'react';
import { Route } from 'react-router-dom';
import Auth from '../Services/AuthService';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return  <Auth>
        <Route
            {...rest}
        >
             <Component />
        </Route>
    </Auth>

}

export default PrivateRoute;