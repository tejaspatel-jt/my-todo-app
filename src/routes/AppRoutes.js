// src/AppRoutes.js
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

const AppRoutes = () => {
    return (
        // <Router>
        <Routes>

            {/* BASE URL / MAIN ROUTE / HOME PAGE - without any endpoint */}
            <Route path="/" element={<Home />} />


            {/* Fallback route for unmatched paths */}
            <Route path="/*" element={<NotFound />} />

            {/* SIMPLE Routing */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />

            {/* N E S T E D Routing */}
            <Route path="/about" element={<About />} >
                <Route path='team' element={<AboutTeam />} />
                <Route path='company' element={<AboutCompany />} />
            </Route>


            {/* D Y N A M I C Routing - with id passed */}
            <Route path='Users' element={<Users />} />
            <Route path='user/:id' element={<UserDetails />} />
            <Route path='Products' element={<Products />} />
            <Route path='product/:id' element={<ProductDetails />} />


            {/* R E L A T I V E Routing */}
            <Route path="dashboard/*" element={<Dashboard />} />


            {/* P R O T E C T E D - Routes - start */}
            <Route
                path='/todos'
                element={<ProtectedRoute><Todos /></ProtectedRoute>}
            />

            <Route
                path='/profile'
                element={<ProtectedRoute><Profile /></ProtectedRoute>}
            />
            {/* P R O T E C T E D - Routes - start */}

            {/* <Route
                path="/page1"
                element={<><Header /><Page1 /></>}
            /> */}
            {/* <Route
                path="/page2"
                element={<ProtectedRoute><Header /><Page2 /></ProtectedRoute>}
            /> */}

            {/* <Route path="/add" element={<AddTodo />} />*/}

            {/* <Route path="/completed" element={<CompletedTodos />} />  */}

            {/* <Route path="/todos" element={<TodoList />}>
                <Route path=":id" element={<TodoDetail />} />
                <Route path=":id/edit" element={<EditTodo />} />
            </Route> */}

            {/* history.ts:494 Uncaught Error: [nav] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment> 
                
                If you add another <Routes> tag inside <Routes>
                
                */}

            {/* Add more routes as needed */}

        </Routes>
        // </Router>
    );
};

export default AppRoutes;