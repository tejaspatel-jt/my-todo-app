// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home'; // Import your components
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProtectedRoute from './ProtectedRoute';
import Todos from '../pages/Todos';
import Profile from '../pages/Profile';
import Login from '../Login';
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

// function OLD_RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       element={<route.component routes={route.routes} />}
//     />
//   );
// }

function RouteWithSubRoutes(route) {

    return (
        <Route
          path={route.path}
          element={<route.component />}
        >
          {route.routes && route.routes.map((subRoute) => (
            <RouteWithSubRoutes key={subRoute.key} {...subRoute} />
          ))}
        </Route>
      );

    return (
      <Route
        path={route.path}
        element={<route.component routes={route.routes} />}
        //element={route.component}
        // element={() => <route.component routes={route.routes} />}
      >
        {route.routes && route.routes.map((subRoute) => (
          <RouteWithSubRoutes key={subRoute.key} {...subRoute} />
        ))}
      </Route>
    );
  }

export function RenderRoutes({ routes }) {

    return routes.map((route) => (
        <Route key={route.key} path={route.path} element={<route.component />}>
          {route.routes && <RenderRoutes routes={route.routes} />}
        </Route>
      ));

    return (
        <>
          {routes.map((route) =>  (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </>
      );


    return routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })

  return (
    <Routes>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const ROUTES = [
    // { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
    { path: "/", key: "ROOT", exact: true, component: Home },
    { path: "/login", key: "LOGIN", exact: true, component: () => <Login /> },
    { path: "/contact", key: "CONTACT", exact: true, component: () => <Contact /> },
    { path: "/page1", key: "PAGE1", exact: true, component: () => <Page1 /> },
    { path: "/page2", key: "PAGE2", exact: true, component: () => <Page2 /> },
    {
      path: "/about",
      key: "ABOUT",
      component: About,
      routes: [
        { path: "team", key: "ABOUT_TEAM", component: AboutTeam },
        { path: "company", key: "ABOUT_COMPANY", component: AboutCompany },
      ],
    },
    { path: "/users", key: "USERS", exact: true, component: () => <Users /> },
    { path: "/user/:id", key: "USER_DETAILS", exact: true, component: () => <UserDetails /> },
    { path: "/products", key: "PRODUCTS", exact: true, component: () => <Products /> },
    { path: "/product/:id", key: "PRODUCT_DETAILS", exact: true, component: () => <ProductDetails /> },
    {
      path: "/todos",
      key: "TODOS",
      exact: true,
      component: () => <ProtectedRoute><Todos /></ProtectedRoute>,
    },
    {
      path: "/profile",
      key: "PROFILE",
      exact: true,
      component: () => <ProtectedRoute><Profile /></ProtectedRoute>,
    },
    { path: "/dashboard/*", key: "DASHBOARD", component: Dashboard },
  ];

// NOT Used
const ROUTES_ISSUE = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <h1>App Index</h1>,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
      {
        path: "/app/about",
        key: "APP_ABOUT",
        component: About,
        routes: [
          { path: "/app/about/team", key: "ABOUT_TEAM", component: AboutTeam },
          { path: "/app/about/company", key: "ABOUT_COMPANY", component: AboutCompany },
        ],
      },
      { path: "/app/contact", key: "APP_CONTACT", component: Contact },
      { path: "/app/todos", key: "APP_TODOS", component: () => <ProtectedRoute><Todos /></ProtectedRoute> },
      { path: "/app/profile", key: "APP_PROFILE", component: () => <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: "/app/users", key: "APP_USERS", component: Users },
      { path: "/app/user/:id", key: "APP_USER_DETAILS", component: UserDetails },
      { path: "/app/products", key: "APP_PRODUCTS", component: Products },
      { path: "/app/product/:id", key: "APP_PRODUCT_DETAILS", component: ProductDetails },
      { path: "/app/dashboard/*", key: "APP_DASHBOARD", component: Dashboard },
    ],
  },
];

export default ROUTES;