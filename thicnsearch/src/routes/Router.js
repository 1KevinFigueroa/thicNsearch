import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../sitePages/Dashboard';
import LibVulnList from '../sitePages/LibVulnList';
import VulnList from '../sitePages/VulnList';
import Settings from '../sitePages/Settings';

const Router = () => {
    return (
        <Routes>
        <Route path='/' element={<Navigate to='/dashboard' element={<Dashboard />} />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/vulnlist' element={<VulnList />} />
            <Route path='/libvulnlist' element={<LibVulnList />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
    );
};

export default Router;
