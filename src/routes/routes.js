// src/routes/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home'; // Import your components
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProtectedRoute from './ProtectedRoute';
import Todos from '../pages/Todos';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Header from '../components/Header';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import NotFound from '../pages/NotFound';
import AboutTeam from '../pages/AboutTeam';
import AboutCompany from '../pages/AboutCompany';
import Users from '../pages/Users';
import UserDetails from '../pages/UserDetails';
import ProductDetails from '../pages/ProductDetails';
import Products from '../pages/Products';
import Dashboard from '../pages/Dashboard';
import DataComponent from '../components/DataComponent';
import TodoComponent from '../pages/TodoComponent';
import Hooks from '../pages/Hooks';

/**
 * * Define the routes for the application.
 * * Each route is an object with a path and an element to render.
 * * * The routes are organized in a way that allows for nested routes.
 * * The main routes are defined in the ROUTES array, and nested routes are defined as children of the main routes.
 * * The RenderRoutes component maps over the ROUTES array and creates a Route for each entry.
 * * If a route has children, it creates a nested Route for each child.
 * * The RenderRoutes component is exported as the default export of this module.
 * 
 * 
* * This allows for easy integration into the main application file, where it can be rendered inside a Router component.
    * * The routes are defined in a way that allows for easy navigation and organization of the application.
    * * The main routes include a home page, about page, contact page, and various other pages for different functionalities.
    * * The nested routes allow for a more organized structure, especially for the about page, which has team and company sub-pages.
    * * The ProtectedRoute component is used to protect certain routes, ensuring that only authenticated users can access them.
    * * The routes are defined in a way that allows for easy modification and addition of new routes in the future.
    * * The RenderRoutes component is designed to be reusable and can be easily integrated into any part of the application.
    * * Overall, this routing structure provides a solid foundation for building a React application with multiple pages and nested routes.
    * * The routes are defined in a way that allows for easy navigation and organization of the application.
 * 
 */
const ROUTES = [
  { path: "/", element: <Home /> },
  { path: "/*", element: <NotFound /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
  { path: "/DataComponent", element: <DataComponent /> },
  {
      path: "/about",
      element: <About />,
      children: [
          { path: "team", element: <AboutTeam /> },
          { path: "company", element: <AboutCompany /> }
      ]
  },
  { path: "/Users", element: <Users /> },
  { path: "/user/:id", element: <UserDetails /> },
  { path: "/Products", element: <Products /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "dashboard/*", element: <Dashboard /> },
  { path: "/todocomp", element: <TodoComponent /> },
  { path: "/hooks", element: <Hooks /> },
  { path: "/todos", element: <ProtectedRoute><Todos /></ProtectedRoute> },
  { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> }
];

const RenderRoutes = () => (
  <Routes>
      {ROUTES.map((route) => (
          route.children ? (
              <Route key={route.path} path={route.path} element={route.element}>
                  {route.children.map((child) => (
                      <Route key={child.path} path={child.path} element={child.element} />
                  ))}
              </Route>
          ) : (
              <Route key={route.path} path={route.path} element={route.element} />
          )
      ))}
  </Routes>
);

export default RenderRoutes;