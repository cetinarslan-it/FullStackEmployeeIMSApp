import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

/* 
 import { Home } from './components/Home';
 ...
 * 
 <Layout>
   <Route exact path='/' component={Home} />
   <Route path='/counter' component={Counter} />
   <Route path='/fetch-data' component={FetchData} />
   <Route path='/myClassComponent' component={MyClassComponent />
   <Route path='/myFunctionalComponent' component={MyFunctionalComponent} />
   <Route path='/Employee' component={Employee} />
 </Layout>
 */

export default class App extends Component {
  static displayName = App.name;

  render() {
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
}
