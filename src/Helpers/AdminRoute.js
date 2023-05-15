import React, {Suspense} from 'react';
import { Route } from 'react-router-dom';
import AdminAuthService from '../Services/AdminAuthService';
import Auth from '../Services/AuthService';

const AdminRoute = ({ component: Component, ...rest }) => {
    return  <AdminAuthService>
        <Route
            {...rest}
        >
             <Component />
        </Route>
    </AdminAuthService>

}

export default AdminRoute;