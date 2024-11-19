// src/AppRoutes.js
import React from 'react';
import  RenderRoutes  from './routes';
import RoutesInTraditionalWay from './RoutesInTraditionalWay';

const AppRoutes = () => {

    return RenderRoutes();

    /**
     * This is very basic and normal way to manage routes
     * No longer used in App, but kept here for reference
     */
    return <RoutesInTraditionalWay />

};

export default AppRoutes;