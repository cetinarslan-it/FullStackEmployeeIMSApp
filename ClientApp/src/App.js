import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
//import { Home } from './components/Home';

 /*
 <Layout>
   <Route exact path='/' component={Auth} />
   <Route path='/Employee' component={Employee} />
   <Route path='/EmployeeNewAdd' component={EmployeeNewAdd} />
   <Route path='/EmployeeList' component={EmployeeList />
   <Route path='/Logout' component={Logout} />
 </Layout>
 */

export const App = () =>{
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>      
      </Layout>
    );
  }
