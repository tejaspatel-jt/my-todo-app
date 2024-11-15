import React from 'react'
import Overview from './Overview'
import Settings from './Settings'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard page - having relative routing</h1>

            <nav>
                <p>
                    <Link to="overview">Overview</Link>
                </p>
                <p>
                    <Link to="settings">Settings</Link>
                </p>

            </nav>
            <Outlet />
            <Routes>
                <Route path="overview" element={<Overview />} />
                <Route path="settings" element={<Settings />} />
            </Routes>

        </>
    )
}

export default Dashboard